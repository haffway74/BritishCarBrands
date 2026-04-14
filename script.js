/* ============================================
   BRAND THEME COLORS
============================================ */
const brandThemes = {
  "Jaguar": "#0B3D2E",
  "Bentley": "#0A2A1F",
  "Rolls-Royce": "#1C1C1C",
  "TVR": "#4B0082",
  "Morgan": "#2E2E2E",
  "Land Rover": "#003B2E",
  "Triumph": "#002D72",
  "Rover": "#660000",
  "Austin": "#1E4D2B",
  "Hillman": "#3A3A3A",
  "Vauxhall": "#B00000",
  "Reliant": "#0055A4",
  "Aston Martin": "#004225",
  "Austin-Healey": "#7A0000",
  "Lotus": "#006A4E",
  "McLaren": "#FF8700",
  "MG": "#8B0000",
  "Mini": "#1A3E6B"
};

/* ============================================
   BRAND CATEGORIES
============================================ */
const brandCategories = {
  "Lotus": "sports",
  "McLaren": "sports",
  "Aston Martin": "luxury",
  "Jaguar": "classic",
  "Mini": "classic",
  "MG": "classic",
  "Bentley": "luxury",
  "Rolls-Royce": "luxury",
  "TVR": "sports"
};

/* ============================================
   BRAND ERA GROUPING
============================================ */
const brandEra = {
  "McLaren": "modern",
  "Aston Martin": "modern",
  "Lotus": "modern",
  "Bentley": "modern",
  "Rolls-Royce": "modern",
  "Jaguar": "modern",
  "Mini": "modern",

  "MG": "classic",
  "TVR": "classic",
  "Austin-Healey": "classic",
  "Rover": "classic",
  "Triumph": "classic",
  "Hillman": "classic",
  "Vauxhall": "classic",
  "Reliant": "classic",
  "Morgan": "classic",
  "Land Rover": "classic",
  "Austin": "classic"
};

/* ============================================
   MASTER BRAND LIST
============================================ */
const brands = [
  "McLaren",
  "Aston Martin",
  "Lotus",
  "Bentley",
  "Rolls-Royce",
  "Jaguar",
  "Mini",
  "MG",
  "TVR",
  "Austin-Healey",
  "Rover",
  "Triumph",
  "Hillman",
  "Vauxhall",
  "Reliant",
  "Morgan",
  "Land Rover",
  "Austin"
];

/* ============================================
   BRAND HISTORY TEXT
============================================ */
const brandHistory = {
  "Lotus": "Founded in 1952 by Colin Chapman, Lotus built its reputation on lightweight engineering and motorsport success.",
  "McLaren": "McLaren began as a racing team in 1963 and evolved into one of the most successful Formula One teams in history.",
  "Aston Martin": "Established in 1913, Aston Martin is synonymous with British luxury, performance, and James Bond.",
  "Jaguar": "Jaguar originated in 1922 and became known for iconic sports cars like the E-Type and XJ series.",
  "Mini": "The original Mini, launched in 1959, revolutionized small car design and became a cultural icon.",
  "MG": "MG became famous for affordable British sports cars like the MGB and MGA.",
  "Bentley": "Founded in 1919, Bentley is known for luxury grand tourers and early Le Mans victories.",
  "Rolls-Royce": "Founded in 1906, Rolls-Royce is renowned for engineering excellence and unmatched luxury.",
  "TVR": "TVR is known for wild styling, lightweight construction, and raw, uncompromising sports cars."
};

/* ============================================
   BRAND GRID (brands.html)
============================================ */
function loadBrandGrid() {
  const modernContainer = document.getElementById("modern-brands");
  const classicContainer = document.getElementById("classic-brands");

  const searchInput = document.getElementById("brandSearchInput");
  const categoryFilter = document.getElementById("brandCategoryFilter");

  function renderGrid() {
    modernContainer.innerHTML = "";
    classicContainer.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    let filteredBrands = brands.filter(brand => {
      const matchesSearch = brand.toLowerCase().includes(searchValue);
      const matchesCategory =
        categoryValue === "all" ||
        brandCategories[brand] === categoryValue;

      return matchesSearch && matchesCategory;
    });

    const modernBrands = filteredBrands
      .filter(b => brandEra[b] === "modern")
      .sort((a, b) => a.localeCompare(b));

    const classicBrands = filteredBrands
      .filter(b => brandEra[b] === "classic")
      .sort((a, b) => a.localeCompare(b));

    // Render modern brands
    modernBrands.forEach(brand => {
      const card = document.createElement("div");
      card.className = "brand-card";

      const fileBrand = brand.toLowerCase().replace(/ /g, '-');

      card.innerHTML = `
        <img src="images/brand-logos/${fileBrand}.png" alt="${brand} logo">
        <span>${brand}</span>
      `;

      card.addEventListener("click", () => {
        window.location.href = `brand.html?brand=${encodeURIComponent(brand)}`;
      });

      modernContainer.appendChild(card);
    });

    // Render classic brands
    classicBrands.forEach(brand => {
      const card = document.createElement("div");
      card.className = "brand-card";

      const fileBrand = brand.toLowerCase().replace(/ /g, '-');

      card.innerHTML = `
        <img src="images/brand-logos/${fileBrand}.png" alt="${brand} logo">
        <span>${brand}</span>
      `;

      card.addEventListener("click", () => {
        window.location.href = `brand.html?brand=${encodeURIComponent(brand)}`;
      });

      classicContainer.appendChild(card);
    });
  }

  renderGrid();
  searchInput.addEventListener("input", renderGrid);
  categoryFilter.addEventListener("change", renderGrid);
}

/* ============================================
   BRAND PAGE (brand.html)
============================================ */
function loadBrandPage() {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get("brand");
  if (!brand) return;

  const themeColor = brandThemes[brand] || "#333";
  document.documentElement.style.setProperty("--brand-color", themeColor);

  document.getElementById("brand-title").textContent = brand;

  const historyEl = document.getElementById("brand-history-text");
  if (historyEl && brandHistory[brand]) {
    historyEl.textContent = brandHistory[brand];
  }

  const models = britishCars.filter(car =>
    car.manufacturer.toLowerCase() === brand.toLowerCase()
  );

  const container = document.getElementById("brand-models");
  if (!container) return;

  models.forEach(car => {
    const div = document.createElement("div");
    div.className = "model-card";

    const thumbPath = car.image_gallery[0];

    div.innerHTML = `
      <a href="details.html?brand=${encodeURIComponent(car.manufacturer)}&model=${encodeURIComponent(car.model)}" class="model-link">
        <img class="model-thumb" src="${thumbPath}" alt="${car.model} thumbnail">
        <h3>${car.model}</h3>
        <p>${car.years_produced}</p>
      </a>
    `;

    container.appendChild(div);
  });
}

/* ============================================
   DETAILS PAGE
============================================ */
function loadCarDetails() {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get("brand");
  const model = params.get("model");
  if (!brand || !model) return;

  const car = britishCars.find(c =>
    c.manufacturer === brand && c.model === model
  );
  if (!car) return;

  document.getElementById("car-title").textContent = `${car.manufacturer} ${car.model}`;
  document.getElementById("car-subtitle").textContent = car.generation;

  const heroImg = document.getElementById("heroImage");
  if (heroImg && car.image_gallery.length > 0) {
    heroImg.src = car.image_gallery[0];
  }

  const gallery = document.getElementById("imageGallery");
  car.image_gallery.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.className = "gallery-thumb";
    thumb.addEventListener("click", () => openLightbox(index, car.image_gallery));
    gallery.appendChild(thumb);
  });

  document.getElementById("spec-engine").textContent = car.engine;
  document.getElementById("spec-capacity").textContent = car.engine_capacity_litres;
  document.getElementById("spec-years").textContent = car.years_produced;
  document.getElementById("spec-body").textContent = car.body_style;
  document.getElementById("spec-drive").textContent = car.drivetrain;
  document.getElementById("spec-trans").textContent = car.transmission.join(", ");
  document.getElementById("spec-seat").textContent = car.seating;

  const notableList = document.getElementById("notable-list");
  car.notable_details.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    notableList.appendChild(li);
  });

  const tagList = document.getElementById("tag-list");
  car.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagList.appendChild(span);
  });
}

/* ============================================
   LIGHTBOX
============================================ */
let currentIndex = 0;
let currentImages = [];

function openLightbox(index, images) {
  currentIndex = index;
  currentImages = images;

  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = images[index];
  lightbox.classList.add("active");
}

document.getElementById("lightbox-close")?.addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("active");
});

document.getElementById("lightbox-prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("lightbox-img").src = currentImages[currentIndex];
});

document.getElementById("lightbox-next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById("lightbox-img").src = currentImages[currentIndex];
});

/* ============================================
   PAGE INITIALIZATION
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("modern-brands")) loadBrandGrid();
  if (document.getElementById("brand-hero")) loadBrandPage();
  if (document.getElementById("car-title")) loadCarDetails();
});
