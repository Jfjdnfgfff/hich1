import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  'filterProducts(target, categoryName);\n            window.scrollTo',
  'filterProducts(target, categoryName);\n            setActiveTab(document.getElementById("nav-products"));\n            window.scrollTo'
);

// We need to make sure the second one (for sidebar link) also switches!
html = html.replace(
  'filterProducts(target, categoryName);\n            closeMenu();',
  'filterProducts(target, categoryName);\n            setActiveTab(document.getElementById("nav-products"));\n            closeMenu();'
);

fs.writeFileSync('index.html', html);
