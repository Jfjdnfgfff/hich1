import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

const jsStart = html.indexOf('// Category clicking logic');
const jsEnd = html.indexOf('});\n      });\n    </script>');

const newLogic = `
        const filterProducts = (category) => {
          if (category === 'packs') {
            setActiveTab(document.getElementById("nav-packs"));
            return;
          }

          // Otherwise show view-home
          const navProducts = document.getElementById("nav-products");
          if (navProducts) {
            setActiveTab(navProducts);
          }

          // Filter product items
          const products = document.querySelectorAll('.product-item');
          products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
              product.style.display = 'flex';
            } else {
              product.style.display = 'none';
            }
          });
        };

        // Category clicking logic
        document.querySelectorAll(".category-item").forEach((item) => {
          item.addEventListener("click", () => {
            const target = item.dataset.target || 'all';
            filterProducts(target);
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });

        // Sidebar link logic
        document.querySelectorAll(".sidebar-link").forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.dataset.target || 'all';
            filterProducts(target);
            closeMenu(); // Automatically close sidebar
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
`;

html = html.substring(0, jsStart) + newLogic + html.substring(jsEnd);
fs.writeFileSync('index.html', html);
