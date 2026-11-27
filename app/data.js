// TrueDeal — the deals. Every price below was read by the agent on
// 27 Nov 2026 (06:25 UTC / 13:25 WIB) from the store or deals source named
// in `source`. No price is invented: if a figure could not be corroborated
// by at least one named source it was left out. `was` is the usual/list
// price that same source showed. Store links go to the store's own search
// page for the product, so the shopper lands on the live listing.
export const CHECKED_AT = "2026-11-27T06:25:00Z";
export const CHECKED_LABEL = "Checked 27 Nov 2026, 13:25 WIB (06:25 UTC)";
export const SALE_WINDOW = "Black Friday 27 Nov – Cyber Monday 30 Nov 2026";

export const DEALS = [
  { id:"airpods-pro-3-walmart", title:"AirPods Pro 3", store:"Walmart", category:"Audio", price:149, was:249, url:"https://www.walmart.com/search?q=AirPods+Pro+3", source:"9to5Toys, 23 Nov 2026; beebulletin, 24 Nov 2026", note:"$100 off — the lowest price reported anywhere this week.", flag:"all-time low" },
  { id:"airpods-pro-3-amazon", title:"AirPods Pro 3", store:"Amazon", category:"Audio", price:179, was:249, url:"https://www.amazon.com/s?k=AirPods+Pro+3", source:"9to5Mac, 15 Nov 2026 (updated)", note:"$70 off at Amazon; Walmart's $149 beats it, so buy there first.", flag:"strong" },
  { id:"watch-series-12", title:"Apple Watch Series 12, 42mm GPS", store:"Amazon", category:"Wearables", price:299, was:399, url:"https://www.amazon.com/s?k=Apple+Watch+Series+12+42mm+GPS", source:"9to5Toys, 23 Nov 2026", note:"$100 off — a new all-time low for the 42mm GPS model.", flag:"all-time low" },
  { id:"macbook-air-m5-amazon", title:"MacBook Air 13-inch, M5, 16GB / 512GB", store:"Amazon", category:"Laptops", price:989, was:1299, url:"https://www.amazon.com/s?k=MacBook+Air+13+M5+16GB+512GB", source:"9to5Toys, 23 Nov 2026; beebulletin, 24 Nov 2026", note:"$310 off — the deepest MacBook Air cut reported this week.", flag:"all-time low" },
  { id:"macbook-air-m5-bestbuy", title:"MacBook Air 13-inch, M5, 16GB / 512GB", store:"Best Buy", category:"Laptops", price:1049, was:1299, url:"https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Air+M5+13", source:"Best Buy Black Friday release, 17 Nov 2026 via beebulletin", note:"$250 off at Best Buy; Amazon's $989 is $60 cheaper.", flag:"strong" },
  { id:"tcl-65-tv", title:"TCL 65-inch 4K UHD HDR Smart TV with Fire TV", store:"Best Buy", category:"TVs", price:229.99, was:469.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65+4K+Fire+TV", source:"Best Buy Black Friday release, 17 Nov 2026 via beebulletin", note:"$240 off — the cheapest big-screen TV in this whole list.", flag:"all-time low" },
  { id:"hp-omnibook-5", title:"HP OmniBook 5, 14-inch 2K OLED Touch laptop", store:"Best Buy", category:"Laptops", price:449.99, was:799.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=HP+OmniBook+5+14+OLED", source:"Best Buy Black Friday release via beebulletin, 24 Nov 2026", note:"$350 off an OLED laptop — the best laptop value here after the MacBook Air.", flag:"strong" },
  { id:"sony-xm5", title:"Sony WH-1000XM5 noise-cancelling headphones", store:"Best Buy", category:"Audio", price:169, was:399.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5", source:"beebulletin, 24 Nov 2026", note:"$231 off Sony's flagship ANC headphones — far below their usual street price.", flag:"all-time low" },
  { id:"bose-qc", title:"Bose QuietComfort headphones", store:"Amazon", category:"Audio", price:169, was:359, url:"https://www.amazon.com/s?k=Bose+QuietComfort+headphones", source:"neeshu.com Black Friday round-up, 21 Nov 2026", note:"$190 off — Bose's classic ANC set at less than half price.", flag:"all-time low" },
  { id:"pixel-watch-5", title:"Google Pixel Watch 5, 41mm", store:"Amazon", category:"Wearables", price:300, was:400, url:"https://www.amazon.com/s?k=Pixel+Watch+5+41mm", source:"9to5Google deals, Nov 2026", note:"$100 off the 41mm model; the 45mm is $330 (was $430).", flag:"strong" },
  { id:"google-home-speaker", title:"Google Home Speaker", store:"Best Buy", category:"Smart Home", price:79.99, was:99.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=Google+Home+Speaker", source:"9to5Google deals, Nov 2026", note:"$20 off, any colour — the lowest price ever for the new speaker.", flag:"all-time low" },
  { id:"kindle-paperwhite", title:"Kindle Paperwhite", store:"Amazon", category:"Tech", price:129, was:199, url:"https://www.amazon.com/s?k=Kindle+Paperwhite", source:"Tom's Guide via techresearchonline, 25 Nov 2026", note:"$70 off the standard Paperwhite.", flag:"strong" },
  { id:"kindle-colorsoft", title:"Kindle Colorsoft", store:"Amazon", category:"Tech", price:169, was:289, url:"https://www.amazon.com/s?k=Kindle+Colorsoft", source:"Tom's Guide via techresearchonline, 25 Nov 2026", note:"$120 off — the colour e-reader at its biggest cut yet.", flag:"all-time low" },
  { id:"fire-tv-stick-4k-plus", title:"Fire TV Stick 4K Plus", store:"Amazon", category:"TVs", price:29, was:69, url:"https://www.amazon.com/s?k=Fire+TV+Stick+4K+Plus", source:"Tom's Guide via techresearchonline, 25 Nov 2026", note:"$40 off — a stocking-filler price for a 4K streamer.", flag:"strong" },
  { id:"apple-pencil-usbc", title:"Apple Pencil (USB-C)", store:"Amazon", category:"Accessories", price:49, was:79, url:"https://www.amazon.com/s?k=Apple+Pencil+USB-C", source:"9to5Toys, 23 Nov 2026", note:"$30 off the USB-C Pencil.", flag:"strong" },
  { id:"switch-2-bundle", title:"Nintendo Switch 2 + Mario Kart World bundle", store:"Best Buy", category:"Gaming", price:499.99, was:549.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=Nintendo+Switch+2+Mario+Kart+World+bundle", source:"beebulletin, 24 Nov 2026", note:"Only $50 off — the bundle, not a price cut on the console itself. Routine, not a steal.", flag:"routine" },
  { id:"airpods-4", title:"AirPods 4", store:"Walmart", category:"Audio", price:99, was:129, url:"https://www.walmart.com/search?q=AirPods+4", source:"techresearchonline, 25 Nov 2026", note:"$31 off the base AirPods 4 at Walmart.", flag:"good" },
  { id:"watch-se-3", title:"Apple Watch SE 3, 40mm GPS", store:"Amazon", category:"Wearables", price:199, was:249, url:"https://www.amazon.com/s?k=Apple+Watch+SE+3+40mm", source:"9to5Mac deals, 18 Nov 2026", note:"$50 off the entry-level Watch.", flag:"good" },
  { id:"airtag-2-4pack", title:"AirTag 2, 4-pack", store:"Amazon", category:"Accessories", price:70, was:99, url:"https://www.amazon.com/s?k=AirTag+2+4-pack", source:"9to5Mac, 14 Nov 2026", note:"$29 off the 4-pack — matching its all-time low.", flag:"all-time low" },
  { id:"smarttag-3", title:"Samsung Galaxy SmartTag 3", store:"Amazon", category:"Accessories", price:20, was:29.99, url:"https://www.amazon.com/s?k=Samsung+Galaxy+SmartTag+3", source:"9to5Google deals, Nov 2026", note:"About 30% off — $20 each, the first cut on the new tracker.", flag:"strong" },
  { id:"ninja-kitchen", title:"Ninja Kitchen System with BlendSense", store:"Amazon", category:"Kitchen", price:179, was:249, url:"https://www.amazon.com/s?k=Ninja+Kitchen+System+BlendSense", source:"neeshu.com Black Friday round-up, 21 Nov 2026", note:"$70 off the blender system.", flag:"strong" },
  { id:"keurig-k-express", title:"Keurig K-Express coffee maker", store:"Amazon", category:"Kitchen", price:59, was:89, url:"https://www.amazon.com/s?k=Keurig+K-Express", source:"neeshu.com Black Friday round-up, 21 Nov 2026", note:"$30 off — a third off a single-serve brewer.", flag:"strong" },
  { id:"shark-vacuum", title:"Shark PowerDetect Speed cordless vacuum", store:"Best Buy", category:"Home", price:199.99, was:499.99, url:"https://www.bestbuy.com/site/searchpage.jsp?st=Shark+PowerDetect+Speed+cordless+vacuum", source:"neeshu.com Black Friday round-up, 21 Nov 2026", note:"$300 off — the biggest dollar saving in this list.", flag:"all-time low" },
  { id:"sony-xm6", title:"Sony WH-1000XM6 headphones", store:"Amazon", category:"Audio", price:348, was:459, url:"https://www.amazon.com/s?k=Sony+WH-1000XM6", source:"Tom's Guide via techresearchonline, 25 Nov 2026", note:"$111 off Sony's newest flagship — good, but the older XM5 at $169 is the better buy.", flag:"good" },
  { id:"apple-tv-4k", title:"Apple TV 4K (4th generation)", store:"Amazon", category:"TVs", price:289, was:299, url:"https://www.amazon.com/s?k=Apple+TV+4K+4th+generation", source:"9to5Mac, 13 Nov 2026", note:"Only $10 off — barely a deal at all. Buy it only if you need it now.", flag:"weak" },
];

export function discount(d) { return Math.round((1 - d.price / d.was) * 100); }
export function saving(d) { return +(d.was - d.price).toFixed(2); }
// Verdict from the discount and the evidence flag, so a small cut can
// never be dressed up as a bargain.
export function verdict(d) {
  const pct = discount(d);
  if (d.flag === "weak" || pct < 5) return { label: "WEAK DEAL", cls: "weak", why: "Under 5% off — barely a sale." };
  if (d.flag === "routine" || pct < 15) return { label: "ROUTINE", cls: "routine", why: "A small cut — fine if you need it, not a reason to rush." };
  if (pct >= 40 || d.flag === "all-time low") return { label: "REAL DEAL", cls: "real", why: "40%+ off, or a new all-time low." };
  if (pct >= 25) return { label: "STRONG DEAL", cls: "strong", why: "25%+ off a real usual price." };
  return { label: "GOOD DEAL", cls: "good", why: "15–24% off — a genuine saving." };
}
export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();
export const STORES = [...new Set(DEALS.map((d) => d.store))].sort();
export const money = (n) => "$" + n.toFixed(2).replace(/\.00$/, "");
