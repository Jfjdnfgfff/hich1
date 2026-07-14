import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<!-- Product 5 -->\n            <div\n              class="bg-white border flex flex-col group hover:shadow-lg transition"\n            >', '<!-- Product 5 -->\n            <div\n              class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="proteine"\n            >');
html = html.replace('<!-- Product 6 -->\n            <div\n              class="bg-white border flex flex-col group hover:shadow-lg transition"\n            >', '<!-- Product 6 -->\n            <div\n              class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="acides"\n            >');
html = html.replace('<!-- Product 7 -->\n            <div\n              class="bg-white border flex flex-col group hover:shadow-lg transition"\n            >', '<!-- Product 7 -->\n            <div\n              class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="booster"\n            >');
html = html.replace('<!-- Product 8 -->\n            <div\n              class="bg-white border flex flex-col group hover:shadow-lg transition"\n            >', '<!-- Product 8 -->\n            <div\n              class="product-item bg-white border flex flex-col group hover:shadow-lg transition" data-category="vitamines"\n            >');

fs.writeFileSync('index.html', html);
