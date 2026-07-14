import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

// Revert the previous bad replace
html = html.replace(
  'filterProducts(target, categoryName);\n            setActiveTab(document.getElementById("nav-products"));\n            window.scrollTo({ top: 0, behavior: "smooth" });',
  'filterProducts(target, categoryName);\n            window.scrollTo({ top: 0, behavior: "smooth" });'
);
html = html.replace(
  'filterProducts(target, categoryName);\n            setActiveTab(document.getElementById("nav-products"));\n            closeMenu();',
  'filterProducts(target, categoryName);\n            closeMenu();'
);

// Inject setActiveTab into filterProducts, below `const categoryCount = ...;`
// Wait, filterProducts already returns if it's "packs". So we just put it right after the check!
html = html.replace(
  'if (category === "packs") {\n            setActiveTab(document.getElementById("nav-packs"));\n            return;\n          }',
  'if (category === "packs") {\n            setActiveTab(document.getElementById("nav-packs"));\n            return;\n          }\n          setActiveTab(document.getElementById("nav-products"));'
);

fs.writeFileSync('index.html', html);
