import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Update sidebar links
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition">Pack</a>',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="packs">Pack</a>'
);
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition"\n            >Tous les produits</a\n          >',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="all"\n            >Tous les produits</a\n          >'
);
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition">Collagène</a>',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="collagene">Collagène</a>'
);
html = html.replace(
    '<a\n            href="#"\n            class="flex justify-between items-center hover:text-brand-orange transition"\n          >\n            Protéine <i class="ri-arrow-right-s-line text-gray-400 text-lg"></i>\n          </a>',
    '<a\n            href="#"\n            class="sidebar-link flex justify-between items-center hover:text-brand-orange transition"\n            data-target="proteine">\n            Protéine <i class="ri-arrow-right-s-line text-gray-400 text-lg"></i>\n          </a>'
);
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition">Créatine</a>',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="creatine">Créatine</a>'
);
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition">Mass Gainer</a>',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="massgainer">Mass Gainer</a>'
);
html = html.replace(
    '<a href="#" class="hover:text-brand-orange transition">Booster</a>',
    '<a href="#" class="sidebar-link hover:text-brand-orange transition" data-target="booster">Booster</a>'
);

// Add data-category to products
html = html.replace('<!-- Product 1 -->\n              <div\n                class="bg-white border flex flex-col group hover:shadow-lg transition"\n              >', '<!-- Product 1 -->\n              <div\n                class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="proteine"\n              >');
html = html.replace('<!-- Product 2 -->\n              <div\n                class="bg-white border flex flex-col group hover:shadow-lg transition"\n              >', '<!-- Product 2 -->\n              <div\n                class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="massgainer"\n              >');
html = html.replace('<!-- Product 3 -->\n              <div\n                class="bg-white border flex flex-col group hover:shadow-lg transition"\n              >', '<!-- Product 3 -->\n              <div\n                class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="creatine"\n              >');
html = html.replace('<!-- Product 4 -->\n              <div\n                class="bg-white border flex flex-col group hover:shadow-lg transition"\n              >', '<!-- Product 4 -->\n              <div\n                class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="vitamines"\n              >');
html = html.replace('<!-- Product 5 -->\n              <div class="bg-white border flex flex-col group hover:shadow-lg transition">', '<!-- Product 5 -->\n              <div class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="proteine">');
html = html.replace('<!-- Product 6 -->\n              <div class="bg-white border flex flex-col group hover:shadow-lg transition">', '<!-- Product 6 -->\n              <div class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="acides">');
html = html.replace('<!-- Product 7 -->\n              <div class="bg-white border flex flex-col group hover:shadow-lg transition">', '<!-- Product 7 -->\n              <div class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="booster">');
html = html.replace('<!-- Product 8 -->\n              <div class="bg-white border flex flex-col group hover:shadow-lg transition">', '<!-- Product 8 -->\n              <div class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="vitamines">');


// Also update the Categories view grid items to have data-target
html = html.replace('<!-- WHEY CONCENTRATE -->\n            <div class="category-item', '<!-- WHEY CONCENTRATE -->\n            <div data-target="proteine" class="category-item');
html = html.replace('<!-- WHEY ISOLATE -->\n            <div class="category-item', '<!-- WHEY ISOLATE -->\n            <div data-target="proteine" class="category-item');
html = html.replace('<!-- WHEY HYDROLYZED -->\n            <div class="category-item', '<!-- WHEY HYDROLYZED -->\n            <div data-target="proteine" class="category-item');
html = html.replace('<!-- CASEIN -->\n            <div class="category-item', '<!-- CASEIN -->\n            <div data-target="proteine" class="category-item');
html = html.replace('<!-- MASS GAINER -->\n            <div class="category-item', '<!-- MASS GAINER -->\n            <div data-target="massgainer" class="category-item');
html = html.replace('<!-- CRÉATINE -->\n            <div class="category-item', '<!-- CRÉATINE -->\n            <div data-target="creatine" class="category-item');
html = html.replace('<!-- PRE-WORKOUT -->\n            <div class="category-item', '<!-- PRE-WORKOUT -->\n            <div data-target="booster" class="category-item');
html = html.replace('<!-- BOOSTERS -->\n            <div class="category-item', '<!-- BOOSTERS -->\n            <div data-target="booster" class="category-item');
html = html.replace('<!-- VITAMINES -->\n            <div class="category-item', '<!-- VITAMINES -->\n            <div data-target="vitamines" class="category-item');
html = html.replace('<!-- ACIDES AMINÉS -->\n            <div class="category-item', '<!-- ACIDES AMINÉS -->\n            <div data-target="acides" class="category-item');
html = html.replace('<!-- COLLAGÈNE -->\n            <div class="category-item', '<!-- COLLAGÈNE -->\n            <div data-target="collagene" class="category-item');
html = html.replace('<!-- FAT BURNER -->\n            <div class="category-item', '<!-- FAT BURNER -->\n            <div data-target="fatburner" class="category-item');
html = html.replace('<!-- BARS & SNACKS -->\n            <div class="category-item', '<!-- BARS & SNACKS -->\n            <div data-target="snacks" class="category-item');


fs.writeFileSync('index.html', html);
console.log('Sidebar linked and data-categories added');
