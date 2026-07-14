import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix sidebar links
html = html.replace('<a href="#" class="hover:text-brand-orange transition">Fat Burner</a>', '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="fatburner">Fat Burner</a>');
html = html.replace('<a href="#" class="hover:text-brand-orange transition"\n            >Acides Aminés</a\n          >', '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="acides"\n            >Acides Aminés</a\n          >');
html = html.replace('<a href="#" class="hover:text-brand-orange transition">Pre-workout</a>', '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="booster">Pre-workout</a>');
html = html.replace('<a href="#" class="hover:text-brand-orange transition">Vitamines</a>', '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="vitamines">Vitamines</a>');
html = html.replace('<a href="#" class="hover:text-brand-orange transition">Snacks</a>', '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="snacks">Snacks</a>');

// 2. Add IDs to hero banner and tabs
html = html.replace('<section\n          class="bg-black text-white relative py-20 px-4 text-center overflow-hidden min-h-[400px] flex flex-col justify-center items-center"\n        >', '<section\n          id="hero-banner"\n          class="bg-black text-white relative py-20 px-4 text-center overflow-hidden min-h-[400px] flex flex-col justify-center items-center"\n        >');

html = html.replace('<div\n              class="flex font-bold text-[11px] sm:text-xs mb-6 uppercase tracking-widest border-b pb-2"\n            >', '<div\n              id="products-tabs"\n              class="flex font-bold text-[11px] sm:text-xs mb-6 uppercase tracking-widest border-b pb-2"\n            >');

// 3. Add Category Title
const categoryTitleHtml = `
            <div id="category-header" class="hidden mb-6 border-b border-gray-200 pb-4 flex items-center justify-between">
              <h2 id="category-title" class="font-black text-2xl sm:text-3xl uppercase tracking-wide text-gray-900">CATÉGORIE</h2>
              <span id="category-count" class="text-gray-500 text-sm font-bold">0 produits</span>
            </div>
`;
html = html.replace('<div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">', categoryTitleHtml + '            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">');

// 4. Update JS logic
const oldJS = `        const filterProducts = (category) => {
          if (category === "packs") {
            setActiveTab(document.getElementById("nav-packs"));
            return;
          }

          // Otherwise show view-home
          const navProducts = document.getElementById("nav-products");
          if (navProducts) {
            setActiveTab(navProducts);
          }

          // Filter product items
          const products = document.querySelectorAll(".product-item");
          products.forEach((product) => {
            if (category === "all" || product.dataset.category === category) {
              product.style.display = "flex";
            } else {
              product.style.display = "none";
            }
          });
        };`;

const newJS = `        const filterProducts = (category, categoryName = '') => {
          if (category === "packs") {
            setActiveTab(document.getElementById("nav-packs"));
            return;
          }

          // Otherwise show view-home
          const navProducts = document.getElementById("nav-products");
          if (navProducts) {
            setActiveTab(navProducts);
          }

          const heroBanner = document.getElementById("hero-banner");
          const productsTabs = document.getElementById("products-tabs");
          const categoryHeader = document.getElementById("category-header");
          const categoryTitle = document.getElementById("category-title");
          const categoryCount = document.getElementById("category-count");

          // Filter product items
          const products = document.querySelectorAll(".product-item");
          let visibleCount = 0;
          products.forEach((product) => {
            if (category === "all" || product.dataset.category === category) {
              product.style.display = "flex";
              visibleCount++;
            } else {
              product.style.display = "none";
            }
          });

          if (category === "all") {
            if (heroBanner) heroBanner.style.display = "flex";
            if (productsTabs) productsTabs.style.display = "flex";
            if (categoryHeader) categoryHeader.style.display = "none";
          } else {
            if (heroBanner) heroBanner.style.display = "none";
            if (productsTabs) productsTabs.style.display = "none";
            if (categoryHeader) {
              categoryHeader.style.display = "flex";
              categoryTitle.textContent = categoryName || category.toUpperCase();
              categoryCount.textContent = \`\${visibleCount} produit\${visibleCount !== 1 ? 's' : ''}\`;
            }
          }
        };`;

html = html.replace(oldJS, newJS);

// 5. Update click handlers to pass categoryName
html = html.replace('const target = item.dataset.target || "all";\n            filterProducts(target);', 'const target = item.dataset.target || "all";\n            const categoryName = item.querySelector("span") ? item.querySelector("span").textContent : "";\n            filterProducts(target, categoryName);');

html = html.replace('const target = link.dataset.target || "all";\n            filterProducts(target);', 'const target = link.dataset.target || "all";\n            const categoryName = link.textContent.trim();\n            filterProducts(target, categoryName);');


fs.writeFileSync('index.html', html);
console.log('Category pages implemented');
