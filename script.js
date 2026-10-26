// ===================================================
// PRODUCTS DATA
// To add a new saree: copy one block, paste below,
// change the details and image filename
// ===================================================

const PRODUCTS = [
  {
    id: "magenta-tussar",
    title: "Magenta Tussar Ikat Saree",
    origin: "Sambalpuri Ikat · Tussar Silk",
    image: "magenta2-front.jpeg",
    badge: "New Arrival",
    badgeGold: false,
    price: 35000,
    discount: 15,
    desc: "A regal magenta tussar silk woven with intricate ikat temple motifs, finished with a contrast plum pallu bordered in woven gold.",
    meta: {
      "Fabric": "Pure Tussar Silk",
      "Weave": "Sambalpuri Ikat",
      "Blouse": "Polka-print, attached",
      "Length": "5.5 m + blouse piece"
    }
  },
  {
    id: "magenta-classic",
    title: "Magenta Classic Ikat Drape",
    origin: "Sambalpuri Ikat · Pure Silk",
    image: "magenta-front.jpeg",
    badge: "New Arrival",
    badgeGold: false,
    price: 35000,
    discount: 15,
    desc: "Deep fuchsia ground patterned with traditional motifs, paired with a wide brown-and-gold ikat border carrying elephant and floral panels.",
    meta: {
      "Fabric": "Pure Mulberry Silk",
      "Weave": "Sambalpuri Ikat",
      "Border": "Brown & Gold Panel",
      "Length": "5.5 m + blouse piece"
    }
  },
  {
    id: "maroon-ikat",
    title: "Maroon Heirloom Ikat Saree",
    origin: "Sambalpuri Ikat · Pure Silk",
    image: "maroon-front.jpeg",
    badge: "Bestseller",
    badgeGold: true,
    price: 27000,
    discount: 12,
    desc: "A deep maroon ground scattered with ivory ikat florals and rudraksha motifs, edged in a warm gold-and-red striped border.",
    meta: {
      "Fabric": "Pure Mulberry Silk",
      "Weave": "Sambalpuri Ikat",
      "Border": "Gold & Red Stripe",
      "Length": "5.5 m + blouse piece"
    }
  },
  {
    id: "odisha-ikat",
    title: "Odisha Heritage Ikat Silk",
    origin: "Sambalpuri Ikat · Pure Silk",
    image: "odisha-front.jpeg",
    badge: "Vogue Edit",
    badgeGold: true,
    price: 27000,
    discount: 12,
    desc: "Emerald green silk dense with temple and elephant ikat motifs, framed in a rich maroon border. A statement drape that needs no further ornament.",
    meta: {
      "Fabric": "Pure Mulberry Silk",
      "Weave": "Sambalpuri Ikat",
      "Border": "Maroon Temple",
      "Length": "5.5 m + blouse piece"
    }
  },
  {
    id: "pinkzari",
    title: "Pink Zari Silk Saree",
    origin: "Sambalpuri Ikat · Zari Silk",
    image: "pinkzari-front.jpeg",
    badge: "New Arrival",
    badgeGold: false,
    price: 32000,
    discount: 11,
    desc: "A luminous indigo-purple silk with an all-over ikat floral field, bordered in a wide woven red-gold zari panel depicting flowers and temple arches.",
    meta: {
      "Fabric": "Zari Silk",
      "Weave": "Ikat Floral",
      "Blouse": "Polka-print, attached",
      "Length": "5.5 m + blouse piece"
    }
  },
  {
    id: "rosepink",
    title: "Rose Green Ikat Silk Saree",
    origin: "Sambalpuri Ikat · Pure Silk",
    image: "rosepink-front.jpeg",
    badge: "Limited Edit",
    badgeGold: true,
    price: 32000,
    discount: 13,
    desc: "Vibrant emerald green silk with elephant and tiger ikat work, set against a rich magenta-and-gold pallu. A bold festive drape.",
    meta: {
      "Fabric": "Pure Mulberry Silk",
      "Weave": "Sambalpuri Ikat",
      "Pallu": "Magenta & Gold",
      "Length": "5.5 m + blouse piece"
    }
  }

  // ===================================================
  // ADD NEW SAREE BELOW THIS LINE
  // Copy the block above, paste here, edit the details
  // Save your new image in the images/ folder first
  // ===================================================
];

// ===================================================
// SLIDE VIEWS (do not change)
// ===================================================
const SLIDES = [
  { cls: "",            label: "Front View — Full Drape" },
  { cls: "zoom-top",    label: "Upper Half — Pallu & Border Detail" },
  { cls: "zoom-bottom", label: "Lower Half — Hemline Detail" },
  { cls: "zoom-top",    label: "Back View — Upper Detail" }
];

// ===================================================
// HELPERS
// ===================================================
function fmt(n) { return n.toLocaleString("en-IN"); }
function disc(p, d) { return Math.round(p * (1 - d / 100)); }

// ===================================================
// BUILD HERO RING
// ===================================================
const ring = document.getElementById("heroRing");
PRODUCTS.forEach(p => {
  const c = document.createElement("div");
  c.className = "ring-card";
  c.innerHTML = `
    <img src="${p.image}" alt="${p.title}" loading="lazy">
    <div class="rc-label">
      <small>${p.origin.split("·")[0].trim()}</small>
      ${p.title}
    </div>`;
  c.addEventListener("click", () => openLB(p.id));
  ring.appendChild(c);
});

// ===================================================
// BUILD COLLECTION GRID
// ===================================================
const grid = document.getElementById("collection");
PRODUCTS.forEach(p => {
  const now = disc(p.price, p.discount);
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="card-img">
      <span class="badge ${p.badgeGold ? "gold" : ""}">${p.badge}</span>
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="view-hint"><span>View Saree</span></div>
    </div>
    <div class="card-info">
      <div class="origin">${p.origin}</div>
      <h3>${p.title}</h3>
      <div class="price-row">
        <span class="price-now">${fmt(now)}</span>
        <span class="price-old">${fmt(p.price)}</span>
        <span class="save-tag">${p.discount}% off</span>
      </div>
    </div>`;
  card.addEventListener("click", () => openLB(p.id));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLB(p.id); }
  });
  grid.appendChild(card);
});

// ===================================================
// LIGHTBOX
// ===================================================
const lb       = document.getElementById("lb");
const lbStage  = document.getElementById("lbStage");
const lbThumbs = document.getElementById("lbThumbs");
const lbLabel  = document.getElementById("lbLabel");
const lbTitle  = document.getElementById("lbTitle");
const lbOrigin = document.getElementById("lbOrigin");
const lbDesc   = document.getElementById("lbDesc");
const lbNow    = document.getElementById("lbNow");
const lbOld    = document.getElementById("lbOld");
const lbSave   = document.getElementById("lbSave");
const lbMeta   = document.getElementById("lbMeta");
const lbBuy    = document.getElementById("lbBuy");
const lbMail   = document.getElementById("lbMail");

let curIdx = 0, curProd = null, timer = null;

function openLB(id) {
  curProd = PRODUCTS.find(p => p.id === id);
  if (!curProd) return;
  curIdx = 0;
  const now = disc(curProd.price, curProd.discount);
  lbOrigin.textContent = curProd.origin;
  lbTitle.textContent  = curProd.title;
  lbDesc.textContent   = curProd.desc;
  lbNow.textContent    = fmt(now);
  lbOld.textContent    = fmt(curProd.price);
  lbSave.textContent   = `Launch Price — ${curProd.discount}% off`;
  lbMeta.innerHTML = "";
  Object.entries(curProd.meta).forEach(([k, v]) => {
    const d = document.createElement("div");
    d.innerHTML = `<div class="mk">${k}</div><div class="mv">${v}</div>`;
    lbMeta.appendChild(d);
  });
  lbBuy.onclick = () => {
    const upi = `upi://pay?pa=VASTRA@okaxis&pn=VASTRA&am=${now}&cu=INR&tn=${encodeURIComponent(curProd.title)}`;
    window.location.href = upi;
  };
  lbMail.onclick = () => {
    const sub  = encodeURIComponent(`Enquiry — ${curProd.title}`);
    const body = encodeURIComponent(`Hello Vastra,\n\nI am interested in the ${curProd.title} at ₹${fmt(now)} (launch price).\n\nPlease share availability and payment details.\n\nThank you.`);
    window.location.href = `mailto:VASTRA@gmail.com?subject=${sub}&body=${body}`;
  };
  buildStage();
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  startAuto();
}

function buildStage() {
  lbStage.innerHTML = "";
  lbThumbs.innerHTML = "";
  SLIDES.forEach((s, i) => {
    const slide = document.createElement("div");
    slide.className = `lb-slide ${s.cls}${i === 0 ? " active" : ""}`;
    slide.innerHTML = `<img src="${curProd.image}" alt="${curProd.title} view ${i + 1}" loading="lazy">`;
    lbStage.appendChild(slide);
    const th = document.createElement("div");
    th.className = `lb-thumb${i === 0 ? " active" : ""}`;
    th.innerHTML = `<img src="${curProd.image}" alt="thumb ${i + 1}">`;
    th.addEventListener("click", () => { goTo(i); restartAuto(); });
    lbThumbs.appendChild(th);
  });
  lbLabel.textContent = SLIDES[0].label;
}

function goTo(i) {
  curIdx = (i + SLIDES.length) % SLIDES.length;
  lbStage.querySelectorAll(".lb-slide").forEach((s, idx) => s.classList.toggle("active", idx === curIdx));
  lbThumbs.querySelectorAll(".lb-thumb").forEach((t, idx) => t.classList.toggle("active", idx === curIdx));
  lbLabel.textContent = SLIDES[curIdx].label;
}
function startAuto()   { timer = setInterval(() => goTo(curIdx + 1), 4000); }
function restartAuto() { clearInterval(timer); startAuto(); }
function closeLB()     { lb.classList.remove("open"); document.body.style.overflow = ""; clearInterval(timer); }

document.getElementById("lbClose").addEventListener("click", closeLB);
document.getElementById("lbPrev").addEventListener("click", () => { goTo(curIdx - 1); restartAuto(); });
document.getElementById("lbNext").addEventListener("click", () => { goTo(curIdx + 1); restartAuto(); });
lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLB();
  if (e.key === "ArrowRight") { goTo(curIdx + 1); restartAuto(); }
  if (e.key === "ArrowLeft")  { goTo(curIdx - 1); restartAuto(); }
});

// ===== HEADER SCROLL =====
window.addEventListener("scroll", () => {
  document.getElementById("hdr").classList.toggle("scrolled", window.scrollY > 40);
});

// ===== MOBILE MENU =====
document.getElementById("ham").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
