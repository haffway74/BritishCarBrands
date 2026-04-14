// script.js
// Shared logic for brands.html and search functionality.

// ========== RENDER BRAND GRID (MODERN + CLASSIC) ==========
function renderBrandGrid() {
  const modernBox = document.getElementById("modernBrands");
  const classicBox = document.getElementById("classicBrands");

  if (!modernBox || !classicBox) return;

  Object.keys(brandLogos).forEach(slug => {
    const logo = brandLogos[slug];
    const nameFromCars = britishCars.find(car => car.slug === slug)?.manufacturer;
    const brandName = nameFromCars || slug.replace("-", " ").toUpperCase();
    const themeColor = brandThemes[slug] || "#333";
    const founded = brand_founded[slug];
    const status = brandCategories[slug]; // "modern" or "classic"

    const card = document.createElement("div");
    card.className = "brand-card";
    card.style.borderTopColor = themeColor;
    card.onclick = () => {
      window.location.href = `brand.html?brand=${slug}`;
    };

    card.innerHTML = `
      <div class="brand-card-header">
        <img src="${logo}" alt="${brandName}" class="brand-card-logo" />
      </div>
      <div class="brand-card-body">
        <h3>${brandName}</h3>
        <p class="brand-meta">
          Founded: ${founded || "N/A"} • ${status}
        </p>
      </div>
    `;

    if (status === "modern") {
      modernBox.appendChild(card);
    } else {
      classicBox.appendChild(card);
    }
  });
}

// ========== SIMPLE SEARCH (BRANDS + MODELS) ==========
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (!query) {
      searchResults.style.display = "none";
      return;
    }

    const matches = britishCars.filter(car => {
      return (
        car.manufacturer.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
      );
    }).slice(0, 10);

    if (matches.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    matches.forEach(car => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.textContent = `${car.manufacturer} — ${car.model}`;
      item.onclick = () => {
        window.location.href = `details.html?brand=${car.slug}&model=${car.model_slug}`;
      };
      searchResults.appendChild(item);
    });

    searchResults.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  renderBrandGrid();
  setupSearch();
});
