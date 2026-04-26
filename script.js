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

  // Load brand history from brandHistory object
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
});
