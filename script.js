// ===============================
// British Car App — script.js
// Handles brand page + model page routing and rendering
// ===============================

// -------------------------------
// NAVIGATION HELPERS
// -------------------------------

function goToBrand(brandSlug) {
  window.location.href = `brand.html?brand=${brandSlug}`;
}

function goToModel(brandSlug, modelSlug) {
  window.location.href = `details.html?brand=${brandSlug}&model=${modelSlug}`;
}

// ===============================
// SEARCH LOGIC FOR BRANDS PAGE
// ===============================

function initBrandSearch() {
  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResults");

  if (!input || !resultsBox) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    if (query.length === 0) {
      resultsBox.innerHTML = "";
      resultsBox.style.display = "none";
      return;
    }

    const matches = britishCars.filter(car =>
      car.manufacturer.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = "<p class='no-results'>No matches found.</p>";
      resultsBox.style.display = "block";
      return;
    }

    resultsBox.innerHTML = matches.map(car => {
      const isBrandMatch = car.manufacturer.toLowerCase().includes(query);

      if (isBrandMatch) {
        return `
          <div class="search-result" onclick="goToBrand('${car.slug}')">
            <img src="images/brand-logos/${car.slug}.png" class="search-result-logo">
            <span>${car.manufacturer}</span>
          </div>
        `;
      }

      return `
        <div class="search-result" onclick="goToModel('${car.slug}', '${car.model_slug}')">
          <img src="${car.hero_image}" class="search-result-logo">
          <span>${car.manufacturer} — ${car.model}</span>
        </div>
      `;
    }).join("");

    resultsBox.style.display = "block";
  });
}

// ===============================
// BRAND PAGE LOGIC
// ===============================

function loadBrandPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const brandSlug = urlParams.get("brand");

  const models = britishCars.filter(car => car.slug === brandSlug);

  if (models.length === 0) {
    console.error("Brand not found:", brandSlug);
    return;
  }

  const brand = models[0];

  // Apply manufacturer theme colors
  const theme = brandThemes[brand.slug];
  if (theme) {
    document.documentElement.style.setProperty("--brand-color", theme);
    document.documentElement.style.setProperty("--brand-color-light", theme);
    document.documentElement.style.setProperty("--accent-gold", "#D4AF37");
  }

  document.getElementById("brand-name").textContent = brand.manufacturer;
  document.getElementById("brand-logo").src = `images/brand-logos/${brand.slug}.png`;

  // Load brand history
  document.getElementById("brand-history").textContent =
    brandHistory[brand.slug] || "No history available.";

  const modernModels = models.filter(m => m.heritage_group === "modern");
  const classicModels = models.filter(m => m.heritage_group === "classic");
  const specialModels = models.filter(m => m.heritage_group === "special");

  renderModelSection("modern-models", modernModels);
  renderModelSection("classic-models", classicModels);
  renderModelSection("special-models", specialModels);
}

// -------------------------------
// RENDER MODEL CARDS FOR BRAND PAGE
// -------------------------------

function renderModelSection(containerId, models) {
  const container = document.getElementById(containerId);

  if (!models || models.length === 0) {
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

// ===============================
// MODEL DETAILS PAGE LOGIC
// ===============================

function loadModelDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const brandSlug = urlParams.get("brand");
  const modelSlug = urlParams.get("model");

  const model = britishCars.find(
    car => car.slug === brandSlug && car.model_slug === modelSlug
  );

  if (!model) {
    console.error("Model not found:", brandSlug, modelSlug);
    return;
  }

  document.getElementById("model-name").textContent = model.model;
  document.getElementById("model-hero").src = model.hero_image;

  document.getElementById("model-summary").textContent = model.model_summary;

  document.getElementById("model-years").textContent = model.years_produced;
  document.getElementById("model-engine").textContent = model.engine;
  document.getElementById("model-horsepower").textContent = model.horsepower;
  document.getElementById("model-top-speed").textContent = model.top_speed_mph + " mph";
  document.getElementById("model-body-style").textContent = model.body_style;
  document.getElementById("model-drivetrain").textContent = model.drivetrain;
  document.getElementById("model-transmission").textContent = model.transmission;
  document.getElementById("model-seating").textContent = model.seating;
  document.getElementById("model-location").textContent = model.production_location;
  document.getElementById("model-designer").textContent = model.designer;
  document.getElementById("model-price-new").textContent = model.price_when_new;
  document.getElementById("model-value-range").textContent = model.current_value_range;

  document.getElementById("model-variants").innerHTML =
    model.variants.map(v => `<li>${v.name} (${v.years}) — ${v.engine}</li>`).join("");

  document.getElementById("model-fun-facts").innerHTML =
    model.fun_facts.map(f => `<li>${f}</li>`).join("");

  document.getElementById("model-achievements").innerHTML =
    model.notable_achievements.map(a => `<li>${a}</li>`).join("");

  document.getElementById("model-gallery").innerHTML =
    model.image_gallery.map(img => `<img src="${img}" class="gallery-img" alt="${model.model}">`).join("");

  document.getElementById("back-to-brand").onclick = () => goToBrand(model.slug);
}

// ===============================
// MAIN BRANDS PAGE LOGIC
// ===============================

function loadBrandsPage() {
  const brands = {};

  britishCars.forEach(car => {
    if (!brands[car.slug]) {
      brands[car.slug] = {
        slug: car.slug,
        manufacturer: car.manufacturer,

        brand_history: brandHistory[car.slug] || "",
        brand_founded: brand_founded[car.slug] || "Unknown",
        brand_headquarters: brand_headquarters[car.slug] || "Unknown",

        logo: `images/brand-logos/${car.slug}.png`,
        heritage_group: brandCategories[car.slug] || "classic"
      };
    }
  });

  const modernContainer = document.getElementById("modernBrands");
  const classicContainer = document.getElementById("classicBrands");
  const specialContainer = document.getElementById("specialBrands");

  modernContainer.innerHTML = "";
  classicContainer.innerHTML = "";
  specialContainer.innerHTML = "";

  Object.values(brands).forEach(brand => {
    const card = `
      <div class="brand-card" onclick="goToBrand('${brand.slug}')">
        <div class="brand-card-header">
          <img src="${brand.logo}" class="brand-card-logo" alt="${brand.manufacturer}">
        </div>
        <div class="brand-card-body">
          <h3>${brand.manufacturer}</h3>
          <p class="brand-meta"><strong>Founded:</strong> ${brand.brand_founded}</p>
          <p class="brand-meta"><strong>HQ:</strong> ${brand.brand_headquarters}</p>
        </div>
      </div>
    `;

    if (brand.heritage_group === "modern") {
      modernContainer.innerHTML += card;
    } else if (brand.heritage_group === "special") {
      specialContainer.innerHTML += card;
    } else {
      classicContainer.innerHTML += card;
    }
  });
}

// ===============================
// PHASE 2 — VIEW TOGGLE SYSTEM
// ===============================

function setupViewToggle() {
  const timelineBtn = document.getElementById("timeline-btn");
  const brandBtn = document.getElementById("brand-btn");

  const timelineView = document.getElementById("timeline-view");
  const brandView = document.getElementById("brand-view");

  // Default: show timeline view
  timelineView.classList.remove("hidden");
  brandView.classList.add("hidden");

  timelineBtn.addEventListener("click", () => {
    timelineBtn.classList.add("active");
    brandBtn.classList.remove("active");

    timelineView.classList.remove("hidden");
    brandView.classList.add("hidden");

    timelineView.classList.add("fade-in");
  });

  brandBtn.addEventListener("click", () => {
    brandBtn.classList.add("active");
    timelineBtn.classList.remove("active");

    brandView.classList.remove("hidden");
    timelineView.classList.add("hidden");

    brandView.classList.add("fade-in");
  });
}
// ===============================
// PHASE 3 — TIMELINE VIEW LOGIC
// ===============================
function setupTimeline() {
  const eras = document.querySelectorAll(".timeline-era");
  const detailsBox = document.getElementById("timeline-details");

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
// ===============================
// PHASE 4 — RACING GALLERIES
// ===============================
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
      .map(img => `<img src="${img}" onclick="openLightbox('${img}')">`)
      .join("");
  });
}
// ===============================
// PHASE 5 Driver Logic
// ===============================
function setupDrivers() {
  const cards = document.querySelectorAll(".driver-card");
  const panel = document.getElementById("driver-panel");
  const overlay = document.getElementById("driver-panel-overlay");
  const closeBtn = document.getElementById("driver-panel-close");
  const content = document.getElementById("driver-panel-content");

  const driverData = {
    clark: {
      name: "Jim Clark",
      bio: "Two-time F1 World Champion and one of the most naturally gifted drivers in history.",
      highlights: [
        "F1 World Champion: 1963, 1965",
        "Indianapolis 500 winner: 1965",
        "Lotus legend and master of smooth speed"
      ]
    },
    stewart: {
      name: "Jackie Stewart",
      bio: "Triple World Champion and a pioneer of safety in motorsport.",
      highlights: [
        "F1 World Champion: 1969, 1971, 1973",
        "Known as 'The Flying Scot'",
        "Instrumental in improving F1 safety standards"
      ]
    },
    hamilton: {
      name: "Lewis Hamilton",
      bio: "One of the most successful drivers in F1 history, redefining modern British motorsport.",
      highlights: [
        "Multiple F1 World Championships",
        "Holds numerous pole and win records",
        "Iconic partnership with Mercedes"
      ]
    },
    moss: {
      name: "Stirling Moss",
      bio: "Often called the greatest driver never to win the World Championship.",
      highlights: [
        "16 Grand Prix wins",
        "Versatile across sports cars and single-seaters",
        "Synonymous with gentleman racing spirit"
      ]
    },
    mansell: {
      name: "Nigel Mansell",
      bio: "Aggressive, emotional, and spectacularly fast—beloved by British fans.",
      highlights: [
        "F1 World Champion: 1992",
        "CART IndyCar World Series Champion: 1993",
        "Known for dramatic wheel-to-wheel battles"
      ]
    }
  };

  function openDriver(key) {
    const d = driverData[key];
    if (!d) return;

    content.innerHTML = `
      <h3>${d.name}</h3>
      <p>${d.bio}</p>
      <h4>Highlights</h4>
      <ul>
        ${d.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    `;

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
      openDriver(key);
    });
  });

  closeBtn.addEventListener("click", closeDriver);
  overlay.addEventListener("click", closeDriver);
}




// ===============================
// PAGE INITIALIZATION
// ===============================

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
    console.log("British Racing page loaded");
    setupViewToggle();
    setupTimeline();
    loadBrandRacingGalleries();
    setupDrivers();
  }
});
