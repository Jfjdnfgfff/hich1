import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Update nav
html = html.replace('<a href="#" class="hover:text-black transition uppercase">Catégories</a>', '<a href="#" id="nav-categories" class="hover:text-black transition uppercase">Catégories</a>');

// Define the Categories view
const categoriesHtml = `
      <!-- Categories View -->
      <div id="view-categories" class="hidden bg-gray-50 pb-12">
        <div class="max-w-6xl mx-auto border-t border-gray-100">
          <div class="grid grid-cols-3 sm:grid-cols-4 border-l border-gray-100">
            <!-- WHEY CONCENTRATE -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Concentrate" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Concentrate</span>
            </div>
            <!-- WHEY ISOLATE -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Isolate" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Isolate</span>
            </div>
            <!-- WHEY HYDROLYZED -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Hydrolyzed" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Hydrolyzed</span>
            </div>
            <!-- CASEIN -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=200&h=200" alt="Casein" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Casein</span>
            </div>
            <!-- MASS GAINER -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=200&h=200&auto=format&fit=crop" alt="Mass Gainer" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mb-3" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Mass Gainer</span>
            </div>
            <!-- CRÉATINE -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200&h=200" alt="Créatine" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Créatine</span>
            </div>
            <!-- PRE-WORKOUT -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=200&h=200" alt="Pre-Workout" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Pre-Workout</span>
            </div>
            <!-- BOOSTERS -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=200&h=200" alt="Boosters" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Boosters</span>
            </div>
            <!-- VITAMINES -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=200&h=200" alt="Vitamines" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Vitamines</span>
            </div>
            <!-- ACIDES AMINÉS -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722822180-2a212353f86e?auto=format&fit=crop&q=80&w=200&h=200" alt="Acides Aminés" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Acides Aminés</span>
            </div>
            <!-- COLLAGÈNE -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=200&h=200" alt="Collagène" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Collagène</span>
            </div>
            <!-- FAT BURNER -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=200&h=200" alt="Fat Burner" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Fat Burner</span>
            </div>
            <!-- BARS & SNACKS -->
            <div class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=200&h=200" alt="Bars & Snacks" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mb-3" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Bars & Snacks</span>
            </div>
          </div>
        </div>
      </div>
`;

// Insert the categories view after view-packs
const viewPacksEnd = html.indexOf('</div>\n      </div>\n      <!-- Cart Summary');
if (viewPacksEnd !== -1) {
    html = html.substring(0, viewPacksEnd + 15) + categoriesHtml + html.substring(viewPacksEnd + 15);
} else {
    const packsEndFallback = html.indexOf('</section>\n      </div>');
    html = html.substring(0, packsEndFallback + 23) + categoriesHtml + html.substring(packsEndFallback + 23);
}


// Replace JS logic
const oldJS = `        // Tab Switching Logic
        const navPacks = document.getElementById("nav-packs");
        const navProducts = document.getElementById("nav-products");
        const viewHome = document.getElementById("view-home");
        const viewPacks = document.getElementById("view-packs");

        const setActiveTab = (activeTab, inactiveTab) => {
          activeTab.classList.add(
            "text-black",
            "border-b-2",
            "border-black",
            "pb-1",
          );
          activeTab.classList.remove("hover:text-black");

          inactiveTab.classList.remove(
            "text-black",
            "border-b-2",
            "border-black",
            "pb-1",
          );
          inactiveTab.classList.add("hover:text-black");
        };

        navPacks.addEventListener("click", (e) => {
          e.preventDefault();
          viewHome.classList.add("hidden");
          viewPacks.classList.remove("hidden");
          setActiveTab(navPacks, navProducts);
        });

        navProducts.addEventListener("click", (e) => {
          e.preventDefault();
          viewPacks.classList.add("hidden");
          viewHome.classList.remove("hidden");
          setActiveTab(navProducts, navPacks);
        });`;

const newJS = `        // Tab Switching Logic
        const tabs = [
          { nav: document.getElementById("nav-packs"), view: document.getElementById("view-packs") },
          { nav: document.getElementById("nav-products"), view: document.getElementById("view-home") },
          { nav: document.getElementById("nav-categories"), view: document.getElementById("view-categories") }
        ];

        const setActiveTab = (activeNav) => {
          tabs.forEach(tab => {
            if (tab.nav) {
              if (tab.nav === activeNav) {
                tab.nav.classList.add("text-black", "border-b-2", "border-black", "pb-1");
                tab.nav.classList.remove("hover:text-black");
                if(tab.view) tab.view.classList.remove("hidden");
              } else {
                tab.nav.classList.remove("text-black", "border-b-2", "border-black", "pb-1");
                tab.nav.classList.add("hover:text-black");
                if(tab.view) tab.view.classList.add("hidden");
              }
            }
          });
        };

        tabs.forEach(tab => {
          if (tab.nav) {
            tab.nav.addEventListener("click", (e) => {
              e.preventDefault();
              setActiveTab(tab.nav);
            });
          }
        });

        // Category clicking logic
        document.querySelectorAll('.category-item').forEach(item => {
          item.addEventListener('click', () => {
            // Switch to products view
            const navProducts = document.getElementById("nav-products");
            if (navProducts) {
              setActiveTab(navProducts);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        });`;

if (html.includes('const navPacks = document.getElementById("nav-packs");')) {
    // try to replace the JS block
    const jsStart = html.indexOf('// Tab Switching Logic');
    const jsEnd = html.indexOf('});\n      });\n    </script>');
    if (jsStart !== -1 && jsEnd !== -1) {
        html = html.substring(0, jsStart) + newJS + '\n' + html.substring(jsEnd);
    }
}

fs.writeFileSync('index.html', html);
console.log('Categories view added');
