import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// The packs are placed in the view-home grid.
const packsStartStr = '<!-- Pack Prise de Masse -->';
const packsEndStr = '<!-- Packs View -->';

const packsStart = html.indexOf(packsStartStr);
// The end we want is just before the `          </div>\n        </section>`
// Let's find the closing `          </div>\n        </section>` before `<!-- Packs View -->`
const packsEndIndex = html.indexOf(packsEndStr);

if (packsStart === -1 || packsEndIndex === -1) {
    console.error("Could not find packs bounds");
    process.exit(1);
}

// We want to replace from packsStart to the end of the grid.
// Let's look for `</div>\n        </section>` before packsEndIndex.
const viewHomeEnd = html.lastIndexOf('</div>', html.lastIndexOf('</section>', packsEndIndex));

const newProducts = `
              <!-- Product 5 -->
              <div class="bg-white border flex flex-col group hover:shadow-lg transition">
                <div class="relative p-6 flex-1 flex justify-center items-center h-48 sm:h-56 bg-white">
                  <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400&h=400" alt="Gold Standard Whey" class="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300" />
                </div>
                <div class="bg-[#1a1a1a] text-white text-[9px] sm:text-[10px] text-center py-1.5 tracking-widest font-bold uppercase cursor-pointer hover:bg-black">
                  ACHAT DIRECT
                </div>
                <div class="p-3 sm:p-4 flex flex-col flex-1 border-t">
                  <h4 class="text-[11px] sm:text-xs font-bold mb-2 leading-snug line-clamp-2 uppercase">Gold Standard 100% Whey - 2.27kg</h4>
                  <div class="text-xs sm:text-sm font-black mb-2">18000.00 DA</div>
                  <div class="text-gray-300 text-[10px] mb-4 flex items-center gap-0.5">
                    <i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-half-line text-yellow-400"></i><span class="text-gray-400 ml-1">(45)</span>
                  </div>
                  <div class="mt-auto">
                    <input type="number" value="1" min="1" class="border border-gray-200 w-full p-2 text-center mb-2 text-xs focus:outline-none focus:border-black" />
                    <button class="bg-[#1a1a1a] hover:bg-black transition text-white text-[10px] sm:text-xs font-bold py-3 w-full uppercase tracking-wider">Ajouter au panier</button>
                  </div>
                </div>
              </div>

              <!-- Product 6 -->
              <div class="bg-white border flex flex-col group hover:shadow-lg transition">
                <div class="relative p-6 flex-1 flex justify-center items-center h-48 sm:h-56 bg-white">
                  <img src="https://images.unsplash.com/photo-1579722822180-2a212353f86e?auto=format&fit=crop&q=80&w=400&h=400" alt="BCAA 8:1:1" class="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300" />
                </div>
                <div class="bg-[#1a1a1a] text-white text-[9px] sm:text-[10px] text-center py-1.5 tracking-widest font-bold uppercase cursor-pointer hover:bg-black">
                  ACHAT DIRECT
                </div>
                <div class="p-3 sm:p-4 flex flex-col flex-1 border-t">
                  <h4 class="text-[11px] sm:text-xs font-bold mb-2 leading-snug line-clamp-2 uppercase">BCAA 8:1:1 Zero - 250g</h4>
                  <div class="text-xs sm:text-sm font-black mb-2">4500.00 DA</div>
                  <div class="text-gray-300 text-[10px] mb-4 flex items-center gap-0.5">
                    <i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-line text-gray-400"></i><span class="text-gray-400 ml-1">(12)</span>
                  </div>
                  <div class="mt-auto">
                    <input type="number" value="1" min="1" class="border border-gray-200 w-full p-2 text-center mb-2 text-xs focus:outline-none focus:border-black" />
                    <button class="bg-[#1a1a1a] hover:bg-black transition text-white text-[10px] sm:text-xs font-bold py-3 w-full uppercase tracking-wider">Ajouter au panier</button>
                  </div>
                </div>
              </div>

              <!-- Product 7 -->
              <div class="bg-white border flex flex-col group hover:shadow-lg transition">
                <div class="relative p-6 flex-1 flex justify-center items-center h-48 sm:h-56 bg-white">
                  <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=400&h=400" alt="C4 Pre-Workout" class="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300" />
                </div>
                <div class="bg-[#1a1a1a] text-white text-[9px] sm:text-[10px] text-center py-1.5 tracking-widest font-bold uppercase cursor-pointer hover:bg-black">
                  ACHAT DIRECT
                </div>
                <div class="p-3 sm:p-4 flex flex-col flex-1 border-t">
                  <h4 class="text-[11px] sm:text-xs font-bold mb-2 leading-snug line-clamp-2 uppercase">C4 Original Pre-Workout - 30 Servings</h4>
                  <div class="text-xs sm:text-sm font-black mb-2">6000.00 DA</div>
                  <div class="text-gray-300 text-[10px] mb-4 flex items-center gap-0.5">
                    <i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><span class="text-gray-400 ml-1">(89)</span>
                  </div>
                  <div class="mt-auto">
                    <input type="number" value="1" min="1" class="border border-gray-200 w-full p-2 text-center mb-2 text-xs focus:outline-none focus:border-black" />
                    <button class="bg-[#1a1a1a] hover:bg-black transition text-white text-[10px] sm:text-xs font-bold py-3 w-full uppercase tracking-wider">Ajouter au panier</button>
                  </div>
                </div>
              </div>

              <!-- Product 8 -->
              <div class="bg-white border flex flex-col group hover:shadow-lg transition">
                <div class="relative p-6 flex-1 flex justify-center items-center h-48 sm:h-56 bg-white">
                  <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400&h=400" alt="Multivitamin" class="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-300" />
                </div>
                <div class="bg-[#1a1a1a] text-white text-[9px] sm:text-[10px] text-center py-1.5 tracking-widest font-bold uppercase cursor-pointer hover:bg-black">
                  ACHAT DIRECT
                </div>
                <div class="p-3 sm:p-4 flex flex-col flex-1 border-t">
                  <h4 class="text-[11px] sm:text-xs font-bold mb-2 leading-snug line-clamp-2 uppercase">Daily Multivitamin Complex - 90 Tabs</h4>
                  <div class="text-xs sm:text-sm font-black mb-2">2500.00 DA</div>
                  <div class="text-gray-300 text-[10px] mb-4 flex items-center gap-0.5">
                    <i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-fill text-yellow-400"></i><i class="ri-star-line text-gray-400"></i><i class="ri-star-line text-gray-400"></i><span class="text-gray-400 ml-1">(4)</span>
                  </div>
                  <div class="mt-auto">
                    <input type="number" value="1" min="1" class="border border-gray-200 w-full p-2 text-center mb-2 text-xs focus:outline-none focus:border-black" />
                    <button class="bg-[#1a1a1a] hover:bg-black transition text-white text-[10px] sm:text-xs font-bold py-3 w-full uppercase tracking-wider">Ajouter au panier</button>
                  </div>
                </div>
              </div>
            </div> <!-- closing grid -->
`;

const updatedHtml = html.substring(0, packsStart) + newProducts + html.substring(viewHomeEnd + 6);
fs.writeFileSync('index.html', updatedHtml);
console.log('Replaced packs with new products');
