import { DEALS, CATEGORIES, STORES, CHECKED_LABEL, SALE_WINDOW, discount, saving, verdict, money } from "./data.js";

const app = document.getElementById("app");
const state = { q: "", category: "All", store: "All", minOff: 0, sort: "best" };

function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function filtered() {
  let list = DEALS.filter((d) => {
    if (state.category !== "All" && d.category !== state.category) return false;
    if (state.store !== "All" && d.store !== state.store) return false;
    if (discount(d) < state.minOff) return false;
    if (state.q && !(d.title + " " + d.store + " " + d.category).toLowerCase().includes(state.q.toLowerCase())) return false;
    return true;
  });
  if (state.sort === "best") list.sort((a, b) => discount(b) - discount(a) || saving(b) - saving(a));
  else if (state.sort === "saving") list.sort((a, b) => saving(b) - saving(a));
  else if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  return list;
}

function card(d) {
  const v = verdict(d);
  return `<article class="card">
    <div class="cat">${esc(d.category)} · ${esc(d.store)}</div>
    <h2><a href="#/deal/${d.id}">${esc(d.title)}</a></h2>
    <div class="price-row"><span class="price">${money(d.price)}</span><span class="was">${money(d.was)}</span><span class="off">−${discount(d)}%</span></div>
    <div class="save">You save ${money(saving(d))}</div>
    <span class="badge ${v.cls}">${v.label}</span>
    <p class="note">${esc(d.note)}</p>
    <p class="meta">${esc(CHECKED_LABEL)} · Source: ${esc(d.source)}</p>
    <a class="cta" href="${esc(d.url)}" target="_blank" rel="noopener">See it at ${esc(d.store)} ↗</a>
  </article>`;
}

function listView(bestOnly) {
  const list = filtered();
  const real = DEALS.filter((d) => verdict(d).label === "REAL DEAL").length;
  const totalSave = DEALS.reduce((s, d) => s + saving(d), 0);
  const best = [...DEALS].sort((a, b) => discount(b) - discount(a))[0];
  app.innerHTML = `
  <section class="hero"><h1>Real Black Friday deals. <em>Checked, not claimed.</em></h1>
  <p>${DEALS.length} deals from Amazon, Best Buy and Walmart for ${esc(SALE_WINDOW)}. Every price was read from the store or a deals source that names the store on 27 Nov 2026 — with the usual price beside it, so you can see whether the discount is real.</p></section>
  <div class="stats">
    <div class="stat"><b>${DEALS.length}</b><span>deals checked</span></div>
    <div class="stat"><b>${real}</b><span>real deals</span></div>
    <div class="stat"><b>${money(totalSave)}</b><span>total saving if you bought one of each</span></div>
    <div class="stat"><b>−${discount(best)}%</b><span>biggest cut: ${esc(best.title)}</span></div>
  </div>
  <div class="controls">
    <div style="flex:1;min-width:220px"><label for="q">Search</label><input id="q" type="search" placeholder="Try “AirPods”, “TV”, “laptop”…" value="${esc(state.q)}"></div>
    <div><label for="cat">Category</label><select id="cat"><option>All</option>${CATEGORIES.map((c) => `<option ${c === state.category ? "selected" : ""}>${c}</option>`).join("")}</select></div>
    <div><label for="store">Store</label><select id="store"><option>All</option>${STORES.map((s) => `<option ${s === state.store ? "selected" : ""}>${s}</option>`).join("")}</select></div>
    <div><label for="off">Min. discount</label><select id="off">${[0, 15, 25, 40].map((n) => `<option value="${n}" ${state.minOff === n ? "selected" : ""}>${n === 0 ? "Any" : n + "% off or more"}</option>`).join("")}</select></div>
    <div><label for="sort">Sort</label><select id="sort">
      <option value="best" ${state.sort === "best" ? "selected" : ""}>Biggest discount</option>
      <option value="saving" ${state.sort === "saving" ? "selected" : ""}>Biggest saving ($)</option>
      <option value="price-asc" ${state.sort === "price-asc" ? "selected" : ""}>Price: low to high</option>
      <option value="price-desc" ${state.sort === "price-desc" ? "selected" : ""}>Price: high to low</option>
    </select></div>
    <button id="reset" class="ghost" type="button">Reset</button>
  </div>
  <p class="count"><b>${list.length}</b> deal${list.length === 1 ? "" : "s"} shown · ${esc(CHECKED_LABEL)}</p>
  ${list.length ? `<div class="grid">${list.map(card).join("")}</div>` : `<div class="empty"><h2>No deals match that search.</h2><p>Try a shorter word, or reset the filters.</p></div>`}`;
  document.getElementById("q").addEventListener("input", (e) => { state.q = e.target.value; render(false); });
  document.getElementById("cat").addEventListener("change", (e) => { state.category = e.target.value; render(false); });
  document.getElementById("store").addEventListener("change", (e) => { state.store = e.target.value; render(false); });
  document.getElementById("off").addEventListener("change", (e) => { state.minOff = Number(e.target.value); render(false); });
  document.getElementById("sort").addEventListener("change", (e) => { state.sort = e.target.value; render(false); });
  document.getElementById("reset").addEventListener("click", () => { Object.assign(state, { q: "", category: "All", store: "All", minOff: 0, sort: "best" }); render(false); });
  // Keep the search box focused while typing (re-render keeps the value).
  const q = document.getElementById("q");
  if (document.activeElement === q || state.q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

function detailView(id) {
  const d = DEALS.find((x) => x.id === id);
  if (!d) { location.hash = "#/"; return; }
  const v = verdict(d);
  const others = DEALS.filter((x) => x.category === d.category && x.id !== d.id).slice(0, 3);
  app.innerHTML = `<section class="detail">
    <a class="back" href="#/">← All deals</a>
    <div class="cat" style="margin-top:14px">${esc(d.category)} · ${esc(d.store)}</div>
    <h1>${esc(d.title)}</h1>
    <div class="price-row"><span class="price">${money(d.price)}</span><span class="was">${money(d.was)}</span><span class="off">−${discount(d)}%</span></div>
    <p class="save">You save ${money(saving(d))} off the usual price of ${money(d.was)}.</p>
    <span class="badge ${v.cls}">${v.label}</span>
    <p class="note" style="margin-top:10px">${esc(d.note)}</p>
    <p class="note"><b>Why this verdict:</b> ${esc(v.why)} ${d.flag === "all-time low" ? "This is the lowest price reported for this product this season." : ""}</p>
    <div class="kv">
      <div><span>Store</span><b>${esc(d.store)}</b></div>
      <div><span>Sale price</span><b>${money(d.price)}</b></div>
      <div><span>Usual price</span><b>${money(d.was)}</b></div>
      <div><span>Discount</span><b>−${discount(d)}%</b></div>
      <div><span>Checked</span><b>27 Nov 2026</b></div>
      <div><span>Source</span><b style="font-size:14px">${esc(d.source)}</b></div>
    </div>
    <a class="cta" href="${esc(d.url)}" target="_blank" rel="noopener">See it at ${esc(d.store)} ↗</a>
    <p class="meta" style="margin-top:12px">Prices change during Black Friday week. Confirm the live price at the store before you buy; if it has moved, the deal is gone.</p>
  </section>
  ${others.length ? `<h2 style="margin:18px 0 12px">More in ${esc(d.category)}</h2><div class="grid">${others.map(card).join("")}</div>` : ""}`;
}

function howView() {
  app.innerHTML = `<section class="how"><h1>How we checked every deal</h1>
  <p>TrueDeal is a finder, not a catalogue of adverts. A deal only made this list if a store page or a deals source naming the store showed the price on 27 Nov 2026.</p>
  <ol>
    <li><b>Found in the wild.</b> Deals were gathered from Amazon, Best Buy and Walmart Black Friday sales (19–30 Nov 2026) via their own sale pages and the deal reports of 9to5Mac, 9to5Google, 9to5Toys, Tom's Guide, beebulletin and neeshu.com.</li>
    <li><b>Checked, not copied.</b> Each price was read on ${esc(CHECKED_LABEL)}. The usual price is the one the same source showed — not a made-up “was” price.</li>
    <li><b>Verdict by rule, not by hype.</b> 40%+ off or a new all-time low = REAL DEAL. 25–39% = STRONG. 15–24% = GOOD. 5–14% = ROUTINE. Under 5% = WEAK — and we say so, even for Apple TV 4K at $10 off.</li>
    <li><b>Left out if unconfirmed.</b> Any product, price or link no source showed was dropped. That is why there are 25 deals here, not 200.</li>
    <li><b>Links go to the store.</b> Each “See it at …” link opens the store's own search page for that product, so you land on the live listing and can confirm the price yourself.</li>
    <li><b>No network, no tracking.</b> The whole site is static files under app/ — the deals live in app/data.js. It works offline, on desktop and on a phone.</li>
  </ol>
  <p><a class="cta" href="#/">Back to the deals</a></p></section>`;
}

function render(applyBest = false) {
  const hash = location.hash || "#/";
  if (hash.startsWith("#/deal/")) detailView(hash.slice(7));
  else if (hash === "#/how") howView();
  else if (hash === "#/best") { if (applyBest) { state.sort = "best"; state.minOff = 40; } listView(true); }
  else { if (applyBest) Object.assign(state, { q: "", category: "All", store: "All", minOff: 0, sort: "best" }); listView(false); }
}
window.addEventListener("hashchange", () => render(true));
render(true);
