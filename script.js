// ============================================================
// British Car Encyclopedia — script.js (CLEAN BASELINE)
// Multi-page routing + rendering + lightbox + optional videos
// ============================================================

// -------------------------------
// NAVIGATION HELPERS
// -------------------------------
function goToBrand(brandSlug) {
  window.location.href = `brand.html?brand=${encodeURIComponent(brandSlug)}`;
}

function goToModel(brandSlug, modelSlug) {
  window.location.href =
    `details.html?brand=${encodeURIComponent(brandSlug)}&model=${encodeURIComponent(modelSlug)}`;
}

// -------------------------------
// DOM + DATA HELPERS
// -------------------------------
function $(id) {
  return document.getElementById(id);
}

// cars.js defines: const britishCars = [ ... ] (not necessarily window.britishCars) 
function getCars() {
  if (typeof britishCars !== "undefined" && Array.isArray(britishCars)) return britishCars;
  if (Array.isArray(window.britishCars)) return window.britishCars;
  return [];
}

function toText(v) {
  if (v === null || v === undefined) return "";
  if (Array.isArray(v)) return v.join(" / ");
  return String(v);
}

function safeArray(a) {
  return Array.isArray(a) ? a : [];
}

function normalizeMakerName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// -------------------------------
// BRAND GROUP OVERRIDES (Curated taxonomy)
// -------------------------------
const BRAND_GROUP_BY_NAME = {
  // Modern
  "bentley": "modern",
  "lotus": "modern",
  "aston martin": "modern",
  "jaguar": "modern",
  "land rover": "modern",
  "mclaren": "modern",
  "mini": "modern",
  "rolls-royce": "modern",
  "rolls royce": "modern",

  // Special
  "tvr": "special",
  "bristol": "special",
  "caterham": "special",
  "morgan": "special"
};

function getBrandGroupForManufacturer(manufacturer) {
  const key = normalizeMakerName(manufacturer);
  return BRAND_GROUP_BY_NAME[key] || "classic";
}

// -------------------------------
// BRAND META RESOLVERS (slug-keyed or name-keyed; const or window.*)
// -------------------------------
function resolveMapValue(mapName, slug, name) {
  // mapName: "brandHistory", "brand_founded", "brand_headquarters", "brandThemes", etc.

  // Global const map
  if (typeof window[mapName] !== "undefined" && window[mapName]) {
    // If someone put it on window explicitly
    const m = window[mapName];
    return (m && (m[slug] || m[name])) || "";
  }

  // Global const in script scope (most common): typeof brandHistory !== "undefined"
  try {
    // eslint-disable-next-line no-eval
    const m = eval(`typeof ${mapName} !== "undefined" ? ${mapName} : null`);
    return (m && (m[slug] || m[name])) || "";
  } catch {
    return "";
  }
}

function getBrandHistoryText(brand) {
  return resolveMapValue("brandHistory", brand?.slug, brand?.manufacturer);
}

function getBrandFounded(brand) {
  return resolveMapValue("brand_founded", brand?.slug, brand?.manufacturer);
}

function getBrandHeadquarters(brand) {
  return resolveMapValue("brand_headquarters", brand?.slug, brand?.manufacturer);
}

function getBrandThemeColor(brand) {
  return resolveMapValue("brandThemes", brand?.slug, brand?.manufacturer);
}

// ============================================================
// OPTION 2 — LIGHTBOX (Gallery zoom) + VIDEO SUPPORT (YouTube)
// ============================================================
function extractYouTubeID(url) {
  if (!url) return "";
  const s = String(url).trim();

  const short = s.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  if (short) return short[1];

  const watch = s.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  if (watch) return watch[1];

  const embed = s.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/);
  if (embed) return embed[1];

  return "";
}

function renderVideos(videos, container) {
  if (!container) return;

  const list = Array.isArray(videos) ? videos : [];
  if (!list.length) {
    container.innerHTML = "";
    container.style.display = "none";
    return;
  }

  container.style.display = "";
  container.innerHTML = `
    <h2 class="video-section-title">Videos</h2>
    <div class="video-grid">
      ${list.map(v => {
        const id = extractYouTubeID(v.youtube || v.url || "");
        if (!id) return "";

        const title = (v.title || "Video")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");

        return `
          <div class="video-card fade-in">
            <p class="video-title">${title}</p>
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/${id}"
                title="${title}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function ensureLightbox() {
  if (document.getElementById("lightbox-modal")) return;

  const modal = document.createElement("div");
  modal.id = "lightbox-modal";
  modal.className = "lightbox-modal";
  modal.innerHTML = `
    <div class="lightbox-content fade-in" role="dialog" aria-modal="true">
      <button class="lightbox-close" id="lightbox-close" aria-label="Close">×</button>
      <img class="lightbox-img" id="lightbox-img" alt="Expanded image" />
    </div>
  `;
  document.body.appendChild(modal);

  const close = () => modal.classList.remove("active");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  document.getElementById("lightbox-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function openLightbox(src) {
  if (!src) return;
  ensureLightbox();
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  modal.classList.add("active");
}

// ============================================================
// BRANDS PAGE
// ============================================================
function initBrandSearch() {
  const input = $("searchInput");
  const resultsBox = $("searchResults");
  if (!input || !resultsBox) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    if (!query) {
      resultsBox.innerHTML = "";
      resultsBox.style.display = "none";
      return;
    }

    const cars = getCars();
    if (!cars.length) {
      resultsBox.innerHTML = "<p class='no-results'>Dataset not loaded.</p>";
      resultsBox.style.display = "block";
      return;
    }

    // Brand matches (dedupe by slug)
    const brandMatches = {};
    cars.forEach(car => {
      if ((car.manufacturer || "").toLowerCase().includes(query)) {
        brandMatches[car.slug] = {
          slug: car.slug,
          manufacturer: car.manufacturer
        };
      }
    });

    // Model matches (limited)
    const modelMatches = cars
      .filter(car => (car.model || "").toLowerCase().includes(query))
      .slice(0, 25);

    const brandCards = Object.values(brandMatches).map(b => `
      <div class="search-result" onclick="goToBrand('${b.slug}')">
        <img src="images/brand-logos/${b.slug}.png" class="search-result-logo" alt="${b.manufacturer}">
        <span>${b.manufacturer}</span>
      </div>
    `);

    const modelCards = modelMatches.map(car => `
      <div class="search-result" onclick="goToModel('${car.slug}', '${car.model_slug}')">
        <img src="${car.hero_image}" class="search-result-logo" alt="${car.model}">
        <span>${car.manufacturer} — ${car.model}</span>
      </div>
    `);

    const html = [...brandCards, ...modelCards].join("");
    resultsBox.innerHTML = html || "<p class='no-results'>No matches found.</p>";
    resultsBox.style.display = "block";
  });
}

function loadBrandsPage() {
  const cars = getCars();
  if (!cars.length) return;

  const brands = {};
  cars.forEach(car => {
    if (!brands[car.slug]) {
      brands[car.slug] = {
        slug: car.slug,
        manufacturer: car.manufacturer,
        brand_founded: getBrandFounded(car) || "Unknown",
        brand_headquarters: getBrandHeadquarters(car) || "Unknown",
        heritage_group: getBrandGroupForManufacturer(car.manufacturer)
      };
    }
  });

  const modernContainer = $("modernBrands");
  const classicContainer = $("classicBrands");
  const specialContainer = $("specialBrands");
  if (!modernContainer || !classicContainer || !specialContainer) return;

  modernContainer.innerHTML = "";
  classicContainer.innerHTML = "";
  specialContainer.innerHTML = "";

  Object.values(brands).forEach(brand => {
    const card = `
      <div class="brand-card" onclick="goToBrand('${brand.slug}')">
        <div class="brand-card-header">
          <img src="images/brand-logos/${brand.slug}.png" class="brand-card-logo" alt="${brand.manufacturer}">
        </div>
        <div class="brand-card-body">
          <h3>${brand.manufacturer}</h3>
          <p class="brand-meta"><strong>Founded:</strong> ${brand.brand_founded}</p>
          <p class="brand-meta"><strong>HQ:</strong> ${brand.brand_headquarters}</p>
        </div>
      </div>
    `;

    if (brand.heritage_group === "modern") modernContainer.innerHTML += card;
    else if (brand.heritage_group === "special") specialContainer.innerHTML += card;
    else classicContainer.innerHTML += card;
  });
}

// ============================================================
// BRAND PAGE
// ============================================================
function loadBrandPage() {
  const cars = getCars();
  if (!cars.length) return;

  const urlParams = new URLSearchParams(window.location.search);
  const brandSlug = urlParams.get("brand");

  const models = cars.filter(car => car.slug === brandSlug);
  if (!models.length) {
    console.error("Brand not found:", brandSlug);
    return;
  }

  const brand = models[0];

  // Theme color (supports name-keyed or slug-keyed maps)
  const theme = getBrandThemeColor(brand);
  if (theme) {
    document.documentElement.style.setProperty("--brand-color", theme);
    document.documentElement.style.setProperty("--brand-color-light", theme);
    document.documentElement.style.setProperty("--accent-gold", "#D4AF37");
  }

  if ($("brand-name")) $("brand-name").textContent = brand.manufacturer;
  if ($("brand-logo")) $("brand-logo").src = `images/brand-logos/${brand.slug}.png`;

  if ($("brand-history")) {
    const history = getBrandHistoryText(brand);
    $("brand-history").textContent = history || "No history available.";
  }

  const modernModels = models.filter(m => m.heritage_group === "modern");
  const classicModels = models.filter(m => m.heritage_group === "classic");
  const specialModels = models.filter(m => m.heritage_group === "special");

  renderModelSection("modern-models", modernModels);
  renderModelSection("classic-models", classicModels);
  renderModelSection("special-models", specialModels);
}

function renderModelSection(containerId, models) {
  const container = $(containerId);
  if (!container) return;

  if (!models || !models.length) {
    container.innerHTML = `<p class="empty-note">No models in this category.</p>`;
    return;
  }

  container.innerHTML = models.map(model => `
    <div class="model-card" onclick="goToModel('${model.slug}', '${model.model_slug}')">
      <img src="${model.hero_image}" alt="${model.model}">
      <h3>${model.model}</h3>
    </div>
  `).join("");
}

// ============================================================
// DETAILS PAGE (Model)
// ============================================================
function loadModelDetails() {
  const cars = getCars();
  if (!cars.length) return;

  const urlParams = new URLSearchParams(window.location.search);
  const brandSlug = urlParams.get("brand");
  const modelSlug = urlParams.get("model");

  const model = cars.find(car => car.slug === brandSlug && car.model_slug === modelSlug);
  if (!model) {
    console.error("Model not found:", brandSlug, modelSlug);
    return;
  }

  if ($("model-name")) $("model-name").textContent = model.model;
  if ($("brand-name")) $("brand-name").textContent = model.manufacturer || "";
  if ($("model-hero")) $("model-hero").src = model.hero_image;

  if ($("model-summary")) $("model-summary").textContent = toText(model.model_summary);

  if ($("model-years")) $("model-years").textContent = toText(model.years_produced);
  if ($("model-engine")) $("model-engine").textContent = toText(model.engine);
  if ($("model-horsepower")) $("model-horsepower").textContent = toText(model.horsepower);
  if ($("model-top-speed")) $("model-top-speed").textContent =
    model.top_speed_mph ? `${toText(model.top_speed_mph)} mph` : "";

  if ($("model-body-style")) $("model-body-style").textContent = toText(model.body_style);
  if ($("model-drivetrain")) $("model-drivetrain").textContent = toText(model.drivetrain);
  if ($("model-transmission")) $("model-transmission").textContent = toText(model.transmission);
  if ($("model-seating")) $("model-seating").textContent = toText(model.seating);
  if ($("model-location")) $("model-location").textContent = toText(model.production_location);
  if ($("model-designer")) $("model-designer").textContent = toText(model.designer);
  if ($("model-price-new")) $("model-price-new").textContent = toText(model.price_when_new);
  if ($("model-value-range")) $("model-value-range").textContent = toText(model.current_value_range);

  if ($("model-variants")) {
    $("model-variants").innerHTML = safeArray(model.variants)
      .map(v => `<li>${toText(v.name)} (${toText(v.years)}) — ${toText(v.engine)}</li>`)
      .join("");
  }

  if ($("model-fun-facts")) {
    $("model-fun-facts").innerHTML = safeArray(model.fun_facts)
      .map(f => `<li>${toText(f)}</li>`)
      .join("");
  }

  if ($("model-achievements")) {
    $("model-achievements").innerHTML = safeArray(model.notable_achievements)
      .map(a => `<li>${toText(a)}</li>`)
      .join("");
  }

  // Gallery with lightbox
  if ($("model-gallery")) {
    $("model-gallery").innerHTML = safeArray(model.image_gallery)
      .map(img => `
        <img
          src="${img}"
          class="gallery-img"
          alt="${model.model}"
          onclick="openLightbox('${img}')"
        />
      `).join("");
  }

  // Optional videos section (appears only if model.videos exists)
  let videosHost = $("model-videos");
  if (!videosHost) {
    videosHost = document.createElement("div");
    videosHost.id = "model-videos";
    videosHost.className = "details-section";

    const gallerySection = $("model-gallery")?.closest(".details-section");
    if (gallerySection && gallerySection.parentNode) {
      gallerySection.parentNode.insertBefore(videosHost, gallerySection);
    } else {
      document.querySelector(".page-container")?.appendChild(videosHost);
    }
  }
  renderVideos(model.videos, videosHost);

  const backBtn = $("back-to-brand");
  if (backBtn) backBtn.onclick = () => goToBrand(model.slug);
}

// ============================================================
// BRITISH RACING — View toggle + Timeline
// ============================================================
function setupViewToggle() {
  const timelineBtn = $("timeline-btn");
  const brandBtn = $("brand-btn");
  const driversBtn = $("drivers-btn");

  const timelineView = $("timeline-view");
  const brandView = $("brand-view");
  const driversView = $("drivers-view");

  if (!timelineBtn || !brandBtn || !driversBtn || !timelineView || !brandView || !driversView) return;

  // Start hidden (per your spec)
  timelineView.classList.add("hidden");
  brandView.classList.add("hidden");
  driversView.classList.add("hidden");

  function clearActive() {
    timelineBtn.classList.remove("active");
    brandBtn.classList.remove("active");
    driversBtn.classList.remove("active");
  }

  timelineBtn.addEventListener("click", () => {
    clearActive();
    timelineBtn.classList.add("active");
    timelineView.classList.remove("hidden");
    brandView.classList.add("hidden");
    driversView.classList.add("hidden");
    timelineView.classList.add("fade-in");
  });

  brandBtn.addEventListener("click", () => {
    clearActive();
    brandBtn.classList.add("active");
    brandView.classList.remove("hidden");
    timelineView.classList.add("hidden");
    driversView.classList.add("hidden");
    brandView.classList.add("fade-in");
  });

  driversBtn.addEventListener("click", () => {
    // If your HTML uses inline onclick redirect to hof-drivers.html, redirect will win.
    clearActive();
    driversBtn.classList.add("active");
    driversView.classList.remove("hidden");
    timelineView.classList.add("hidden");
    brandView.classList.add("hidden");
    driversView.classList.add("fade-in");
  });
}

function setupTimeline() {
  const eras = document.querySelectorAll(".timeline-era");
  const detailsBox = $("timeline-details");
  if (!eras.length || !detailsBox) return;

  const eraContent = {
    "1900s": `
      <h3>The Birth of British Motorsport</h3>
      <p>Britain enters the automotive age with early hill climbs, speed trials, and the first purpose-built circuits.</p>
    `,
    "1920s": `
      <h3>The Bentley Boys Era</h3>
      <p>British dominance at Le Mans begins. The Bentley Boys become legends of endurance racing.</p>
    `,
    "1950s": `
      <h3>Formula One Takes Shape</h3>
      <p>Vanwall and BRM rise. Britain becomes a powerhouse in the early years of Formula One.</p>
    `,
    "1970s": `
      <h3>Lotus Innovation Revolution</h3>
      <p>Colin Chapman and Team Lotus redefine racing with ground effects, aerodynamics, and engineering brilliance.</p>
    `,
    "1990s": `
      <h3>McLaren Supremacy</h3>
      <p>Senna, Prost, and the MP4/4 dominate the sport. British engineering reaches new heights.</p>
    `,
    "modern": `
      <h3>The Hamilton Era</h3>
      <p>Lewis Hamilton becomes one of the greatest drivers in history. British teams remain at the top of global motorsport.</p>
    `
  };

  eras.forEach(era => {
    era.addEventListener("click", () => {
      eras.forEach(e => e.classList.remove("active"));
      era.classList.add("active");
      const key = era.dataset.era;
      detailsBox.innerHTML = eraContent[key] || "<p>No data available.</p>";
      detailsBox.classList.add("fade-in");
    });
  });
}

// ============================================================
// RACING GALLERIES (HOF Teams templates)
// ============================================================
function loadBrandRacingGalleries() {
  const galleries = {
    "lotus-gallery": [
      "images/racing/lotus/lotus49-1.jpg",
      "images/racing/lotus/lotus49-2.jpg",
      "images/racing/lotus/lotus72-1.jpg",
      "images/racing/lotus/lotus79-1.jpg"
    ],
    "mclaren-gallery": [
      "images/racing/mclaren/mp44-1.jpg",
      "images/racing/mclaren/mp44-2.jpg",
      "images/racing/mclaren/f1gtr-1.jpg"
    ],
    "jaguar-gallery": [
      "images/racing/jaguar/dtype-1.jpg",
      "images/racing/jaguar/xjr9-1.jpg",
      "images/racing/jaguar/xjr12-1.jpg"
    ],
    "bentley-gallery": [
      "images/racing/bentley/speedsix-1.jpg",
      "images/racing/bentley/speed8-1.jpg",
      "images/racing/bentley/speedsix-2.jpg"
    ]
  };

  Object.entries(galleries).forEach(([className, images]) => {
    const container = document.querySelector(`.${className}`);
    if (!container) return;

    container.innerHTML = images
      .map(img => `<img src="${img}" alt="Racing photo" onclick="openLightbox('${img}')">`)
      .join("");
  });
}

// ============================================================
// DRIVERS — British Racing side panel (optional)
// ============================================================
function setupDrivers() {
  const cards = document.querySelectorAll(".driver-card, .drivers-view-card");
  const panel = $("driver-panel");
  const overlay = $("driver-panel-overlay");
  const closeBtn = $("driver-panel-close");
  const content = $("driver-panel-content");

  if (!cards.length || !panel || !overlay || !closeBtn || !content) return;

  const driverData = {
    clark: {
      name: "Jim Clark",
      bio: "Two-time F1 World Champion and one of the most naturally gifted drivers in history.",
      highlights: ["F1 World Champion: 1963, 1965", "Indianapolis 500 winner: 1965", "Lotus legend and master of smooth speed"],

    },
    stewart: {
      name: "Jackie Stewart",
      bio: "Triple World Champion and a pioneer of safety in motorsport.",
      highlights: ["F1 World Champion: 1969, 1971, 1973", "Known as 'The Flying Scot'", "Instrumental in improving F1 safety standards"]
    },
    hamilton: {
      name: "Lewis Hamilton",
      bio: "One of the most successful drivers in F1 history, redefining modern British motorsport.",
      highlights: ["Multiple F1 World Championships", "Holds numerous pole and win records", "Iconic partnership with Mercedes"]
    },
    moss: {
      name: "Stirling Moss",
      bio: "Often called the greatest driver never to win the World Championship.",
      highlights: ["16 Grand Prix wins", "Versatile across sports cars and single-seaters", "Synonymous with gentleman racing spirit"]
    },
    mansell: {
      name: "Nigel Mansell",
      bio: "Aggressive, emotional, and spectacularly fast—beloved by British fans.",
      highlights: ["F1 World Champion: 1992", "CART IndyCar World Series Champion: 1993", "Known for dramatic wheel-to-wheel battles"]
    }
  };

  function openDriver(key) {
    const d = driverData[key];
    if (!d) return;

    content.innerHTML = `
      <h3>${d.name}</h3>
      <p>${d.bio}</p>
      <h4>Highlights</h4>
      <ul>${d.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
    `;

    if (Array.isArray(d.videos) && d.videos.length) {
      const videosWrap = document.createElement("div");
      videosWrap.className = "details-section";
      content.appendChild(videosWrap);
      renderVideos(d.videos, videosWrap);
    }

    panel.classList.add("active");
    overlay.classList.add("active");
  }

  function closeDriver() {
    panel.classList.remove("active");
    overlay.classList.remove("active");
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.driver;
      if (key) openDriver(key);
    });
  });

  closeBtn.addEventListener("click", closeDriver);
  overlay.addEventListener("click", closeDriver);
}

// ============================================================
// HOF DRIVERS — Modal popup (hof-drivers.html)
// ============================================================
function setupHofDrivers() {
  const modal = $("driver-modal");
  const modalBody = $("driver-modal-body");
  const closeBtn = $("driver-modal-close");
  if (!modal || !modalBody || !closeBtn) return;

  const driverData = {
    clark: { name: "Jim Clark",
       bio: "Two-time F1 World Champion and one of the most naturally gifted drivers in history.",
       highlights: [
        "F1 World Champion: 1963, 1965",
        "Indianapolis 500 winner: 1965",
        "Lotus legend and master of smooth speed"
      ],
        videos: [
        { title: "Jim Clark's Greatest Moments", youtube: "https://youtu.be/E3PTlDr_-00?si=TJ3UA51NxaTarYkc" }
      ]
     },
    
    stewart: { name: "Jackie Stewart", bio: "Triple World Champion and a pioneer of safety in motorsport.", highlights: ["F1 World Champion: 1969, 1971, 1973", "Known as 'The Flying Scot'", "Instrumental in improving F1 safety standards"] },
    
    hamilton: { name: "Lewis Hamilton",
      bio: "One of the most successful drivers in F1 history.",
      highlights: [
        "Multiple F1 World Championships",
        "Holds numerous pole and win records",
        "Iconic partnership with Mercedes"
      ],
        videos: [
        { title: "Lewis Hamilton's Greatest Moments", youtube: "https://youtu.be/we4VBW99LoU?si=_AUvZ07i2V-GjMSN" }
      ]
    
    },
    moss: { name: "Stirling Moss", bio: "Often called the greatest driver never to win the World Championship.", highlights: ["16 Grand Prix wins", "Versatile across sports cars and single-seaters", "Synonymous with gentleman racing spirit"] },
    mansell: { name: "Nigel Mansell", bio: "Aggressive, emotional, and spectacularly fast.", highlights: ["F1 World Champion: 1992", "CART IndyCar World Series Champion: 1993", "Known for dramatic wheel-to-wheel battles"] },
    ghill: { name: "Graham Hill", bio: "The only driver to win the Triple Crown of Motorsport.", highlights: ["F1 World Champion: 1962, 1968", "Indianapolis 500 winner: 1966", "Le Mans 24 Hours winner: 1972"] },
    button: { name: "Jenson Button", bio: "Smooth, strategic, and universally respected.", highlights: ["F1 World Champion: 2009", "15 Grand Prix wins", "Known for tire management mastery"] },
    dhill: { name: "Damon Hill", bio: "Son of Graham Hill and a determined champion.", highlights: ["F1 World Champion: 1996", "22 Grand Prix wins", "Known for resilience and consistency"] },
    hawthorn: { name: "Mike Hawthorn", bio: "Britain’s first Formula One World Champion.", highlights: ["F1 World Champion: 1958", "Known for his bow tie and fearless driving", "Le Mans competitor"] },
    surtees: { name: "John Surtees", bio: "The only person to win world titles on motorcycles and in Formula One.", highlights: ["F1 World Champion: 1964", "Multiple motorcycle world titles", "A uniquely versatile champion"] }
  };

  function openDriver(key) {
    const d = driverData[key];
    if (!d) return;

    modalBody.innerHTML = `
      <h2>${d.name}</h2>
      <p>${d.bio}</p>
      <h3>Highlights</h3>
      <ul>${d.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
    `;

    if (Array.isArray(d.videos) && d.videos.length) {
      const videosWrap = document.createElement("div");
      videosWrap.className = "details-section";
      modalBody.appendChild(videosWrap);
      renderVideos(d.videos, videosWrap);
    }

    modal.classList.add("active");
  }

  document.querySelectorAll("[data-driver]").forEach(el => {
    el.addEventListener("click", () => openDriver(el.dataset.driver));
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

// ============================================================
// HOF TEAMS — Template selection (hof-teams.html)
// ============================================================
function setupTeamSelection() {
  const cards = document.querySelectorAll(".team-card");
  const container = $("team-info-container");
  if (!cards.length || !container) return;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const team = card.dataset.team;
      const template = $(`team-${team}`);
      if (template && template.content) {
        container.innerHTML = "";
        container.appendChild(template.content.cloneNode(true));
        loadBrandRacingGalleries(); // populate galleries after injection
      }
    });
  });
}

// ============================================================
// MAP PAGE — UK Brand Headquarters
// ============================================================
function setupBrandMap() {
  const mapEl = document.getElementById("uk-map");
  if (!mapEl) return;

  // Approximate UK bounding box (SW → NE)
  const ukBounds = L.latLngBounds(
    [49.8, -8.6],  // Southwest (Cornwall)
    [60.9, 1.8]    // Northeast (Shetland)
  );

  const map = L.map("uk-map", {
    maxBounds: ukBounds,
    maxBoundsViscosity: 0.9, // gentle resistance at edges
    scrollWheelZoom: false
  });

  // Fit map to UK bounds with padding
  map.fitBounds(ukBounds, { padding: [40, 40] });
  map.setMinZoom(5);
  map.setMaxZoom(10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  function createBrandIcon(slug) {
    return L.icon({
      iconUrl: `images/brand-logos/${slug}.png`,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      popupAnchor: [0, -22],
      className: "brand-map-icon"
    });
  }

  // Brand HQ coordinates (curated)
  const brandHQs = [
    { name: "Aston Martin", slug: "aston-martin", lat: 51.7482, lng: -0.9736, location: "Gaydon" },
    { name: "Bentley", slug: "bentley", lat: 53.0639, lng: -2.5209, location: "Crewe" },
    { name: "Jaguar", slug: "jaguar", lat: 52.4068, lng: -1.5197, location: "Coventry" },
    { name: "Land Rover", slug: "land-rover", lat: 52.4068, lng: -1.5197, location: "Coventry" },
    { name: "Lotus", slug: "lotus", lat: 52.5662, lng: 1.2974, location: "Hethel" },
    { name: "McLaren", slug: "mclaren", lat: 51.3480, lng: -0.5589, location: "Woking" },
    { name: "MINI", slug: "mini", lat: 51.8974, lng: -2.0810, location: "Oxford" },
    { name: "Rolls‑Royce", slug: "rolls-royce", lat: 51.1287, lng: -0.1180, location: "Goodwood" },
    { name: "Morgan", slug: "morgan", lat: 52.1123, lng: -2.3384, location: "Malvern Link" },
    { name: "TVR", slug: "tvr", lat: 51.7395, lng: -3.5194, location: "Wales" },
    { name: "AC Cars", slug: "ac-cars", lat: 51.3895, lng: -0.3222, location: "Thames Ditton, Surrey"},
    { name: "MG", slug: "mg", lat: 51.6717, lng: -1.2968, location: "Abingdon‑on‑Thames"},
    { name: "Triumph", slug: "triumph", lat: 52.4068, lng: -1.5197, location: "Coventry"},
    { name: "Rover", slug: "rover", lat: 52.4079, lng: -1.9755, location: "Longbridge, Birmingham"},
    { name: "Austin", slug: "austin", lat: 52.4079, lng: -1.9755, location: "Longbridge, Birmingham"},
    { name: "Vauxhall", slug: "vauxhall", lat: 51.8787, lng: -0.3763, location: "Luton"},
    { name: "Reliant", slug: "reliant", lat: 52.6379, lng: -1.6954, location: "Tamworth"},
    { name: "Hillman", slug: "hillman", lat: 52.3797, lng: -1.4696, location: "Ryton‑on‑Dunsmore"},
   { name: "Bristol", slug: "bristol", lat: 51.5193, lng: -2.5824, location: "Filton, Bristol"},
   { name: "Caterham", slug: "caterham", lat: 51.4629, lng: 0.2360, location: "Dartford, Kent"},
   { name: "Austin‑Healey", slug: "austin-healey", lat: 52.4079, lng: -1.9755, location: "Longbridge, Birmingham"},
    { name: "Daimler", slug: "daimler", lat: 52.4068, lng: -1.5197, location: "Coventry"},
   { name: "Jensen",
  slug: "jensen",
  lat: 52.5146,
  lng: -1.9947,
  location: "West Bromwich"
},

// Morris — Cowley, Oxford
{
  name: "Morris",
  slug: "morris",
  lat: 51.7280,
  lng: -1.2140,
  location: "Cowley, Oxford"
},

// Riley — Coventry
{
  name: "Riley",
  slug: "riley",
  lat: 52.4068,
  lng: -1.5197,
  location: "Coventry"
},

// Sunbeam — Wolverhampton
{
  name: "Sunbeam",
  slug: "sunbeam",
  lat: 52.5862,
  lng: -2.1286,
  location: "Wolverhampton"
},

// Wolseley — Birmingham (Adderley Park)
{
  name: "Wolseley",
  slug: "wolseley",
  lat: 52.4746,
  lng: -1.8415,
  location: "Adderley Park, Birmingham"
}


  ];

  brandHQs.forEach((b, i) => {
    const marker = L.marker([b.lat, b.lng], {
      icon: createBrandIcon(b.slug),
      riseOnHover: true
    }).addTo(map);

    // Drop-in animation (staggered)
    marker.on("add", () => {
      if (marker._icon) {
        setTimeout(() => marker._icon.classList.add("drop-in"), 40 * i);
      }
    });

    marker.bindPopup(`
      <strong>${b.name}</strong><br>
      ${b.location}<br><br>
      <a href="brand.html?brand=${b.slug}">View Brand →</a>
    `);

    
  // ✅ Hover label (brand name)
  marker.bindTooltip(b.name, {
    direction: "top",
    offset: [0, -28],
    opacity: 0.95,
    sticky: false
  });


    // Highlight marker while popup is open
    marker.on("popupopen", () => {
      if (marker._icon) marker._icon.classList.add("is-active");
    });

    marker.on("popupclose", () => {
      if (marker._icon) marker._icon.classList.remove("is-active");
    });
  });
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "brands") {
    loadBrandsPage();
    initBrandSearch();
  }

  if (page === "brand") {
    loadBrandPage();
  }

  if (page === "details") {
    loadModelDetails();
  }

  if (page === "british-racing") {
    setupViewToggle();
    setupTimeline();
    loadBrandRacingGalleries();
    setupDrivers();
  }

  if (page === "hof-teams") {
    setupTeamSelection();
  }

  if (page === "hof-drivers") {
    setupHofDrivers();

    // ------------------------------------------------------------
    // HOF DRIVERS GRID — SCROLL-IN ANIMATION (only on HOF page)
    // ------------------------------------------------------------
    const hofGrid = document.querySelector(".hof-drivers-grid");
    if (hofGrid && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(hofGrid);
    }
  }

  // ✅ Map page init
  if (page === "map") {
    // Guard in case Leaflet didn't load for any reason
    if (typeof L !== "undefined") {
      setupBrandMap();
    } else {
      console.error("Leaflet (L) not found. Check Leaflet script include in map.html.");
    }
  }

  // hof-cars: navigation-only
});

