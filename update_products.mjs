import fs from 'fs';

const products = [
  {
    category: 'proteine',
    title: 'Anabolic Iso+Hydro 1kg Golden Body',
    price: '10500.00 DA',
    rating: 0,
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'proteine',
    title: 'Muscle Fuel Anabolic 5kg USN',
    price: '14800.00 DA',
    rating: 0,
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'creatine',
    title: 'Creatine Optimum Nutrition 300g',
    price: '5500.00 DA',
    rating: 0,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'vitamines',
    title: 'Bodyfuel Omega 3 - 60 Caps',
    price: '5500.00 DA',
    rating: 0,
    img: 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'massgainer',
    title: 'Critical Mass Professional 6kg',
    price: '14500.00 DA',
    rating: 128,
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'massgainer',
    title: 'Serious Mass 5.4kg Optimum Nutrition',
    price: '16000.00 DA',
    rating: 210,
    img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'creatine',
    title: 'Creatine 500g Dymatize',
    price: '6500.00 DA',
    rating: 34,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'creatine',
    title: 'Platinum Creatine Muscletech 400g',
    price: '5800.00 DA',
    rating: 89,
    img: 'https://images.unsplash.com/photo-1579722822180-2a212353f86e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'booster',
    title: 'C4 Original Pre-Workout 30 Servings',
    price: '6000.00 DA',
    rating: 95,
    img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'fatburner',
    title: 'Life Pro Thermo 90 Caps',
    price: '5500.00 DA',
    rating: 0,
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'fatburner',
    title: 'Lipo 6 Black Ultra Concentrate',
    price: '7200.00 DA',
    rating: 42,
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'acides',
    title: 'BCAA 8:1:1 Zero - 250g',
    price: '4500.00 DA',
    rating: 12,
    img: 'https://images.unsplash.com/photo-1579722822180-2a212353f86e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'acides',
    title: 'Xtend BCAA 30 Servings',
    price: '5500.00 DA',
    rating: 330,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'vitamines',
    title: 'Daily Multivitamin Complex 90 Tabs',
    price: '2500.00 DA',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'snacks',
    title: 'Protein Bar Snickers',
    price: '600.00 DA',
    rating: 80,
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    category: 'collagene',
    title: 'Marine Collagen Peptides',
    price: '8500.00 DA',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

let htmlStr = '';

products.forEach((p, idx) => {
  let starsHtml = '';
  const starCount = p.rating > 0 ? (p.rating > 50 ? 5 : (p.rating > 20 ? 4 : 3)) : 0;
  for(let i=0; i<5; i++) {
    if(i < starCount) {
      starsHtml += '<i class="ri-star-fill text-yellow-400"></i>';
    } else {
      starsHtml += '<i class="ri-star-line"></i>';
    }
  }

  htmlStr += `
              <!-- Product \${idx + 1} -->
              <div
                class="product-item bg-white border border-gray-200 flex flex-col group transition"
                data-category="\${p.category}"
              >
                <div
                  class="relative p-6 flex-1 flex justify-center items-center h-56 sm:h-64 bg-white"
                >
                  <img
                    src="\${p.img}"
                    alt="\${p.title}"
                    class="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div
                  class="bg-[#1a1a1a] text-white text-[9px] sm:text-[10px] text-center py-2.5 tracking-[0.2em] font-bold uppercase cursor-pointer hover:bg-black w-full"
                >
                  ACHAT DIRECT
                </div>
                <div class="p-4 sm:p-5 flex flex-col flex-1 text-left">
                  <h4
                    class="text-[11px] sm:text-xs font-medium mb-3 leading-snug line-clamp-2 uppercase tracking-wide text-gray-900"
                  >
                    \${p.title}
                  </h4>
                  <div class="text-sm sm:text-base font-black mb-3 text-black">
                    \${p.price}
                  </div>
                  <div
                    class="text-gray-300 text-[10px] sm:text-[11px] mb-4 flex items-center gap-0.5"
                  >
                    \${starsHtml}
                    <span class="text-gray-400 ml-1">(\${p.rating})</span>
                  </div>
                  
                  <div class="mt-auto flex flex-col">
                    <input
                      type="number"
                      value="1"
                      min="1"
                      class="border border-gray-200 w-full px-3 py-2 text-left text-[13px] font-medium focus:outline-none focus:border-black rounded-none bg-white mb-2"
                    />
                    <button
                      class="bg-black hover:bg-gray-900 transition text-white text-[10px] sm:text-[11px] font-bold py-3.5 w-full uppercase tracking-widest flex items-center justify-center rounded-none"
                    >
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
              </div>
  `;
});

let htmlFile = fs.readFileSync('index.html', 'utf8');

// The grid has class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4" currently.
// Replace the start and end of the products.
const gridStart = htmlFile.indexOf('<div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">');
const productsStart = htmlFile.indexOf('<!-- Product 1 -->', gridStart);
const packsStart = htmlFile.indexOf('</div>\n            </div>\n          </div>\n        </section>', productsStart);

htmlFile = htmlFile.substring(0, productsStart) + htmlStr + '\n              ' + htmlFile.substring(packsStart);

fs.writeFileSync('index.html', htmlFile);
console.log('Products structure updated successfully!');
