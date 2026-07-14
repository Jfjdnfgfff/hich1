import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

const categoriesHtml = `
      <!-- Categories View -->
      <div id="view-categories" class="hidden bg-gray-50 pb-12">
        <div class="max-w-6xl mx-auto border-t border-gray-100">
          <div class="grid grid-cols-3 sm:grid-cols-4 border-l border-gray-100">
            <!-- WHEY CONCENTRATE -->
            <div data-target="proteine" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Concentrate" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Concentrate</span>
            </div>
            <!-- WHEY ISOLATE -->
            <div data-target="proteine" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Isolate" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Isolate</span>
            </div>
            <!-- WHEY HYDROLYZED -->
            <div data-target="proteine" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=200&h=200" alt="Whey Hydrolyzed" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Whey Hydrolyzed</span>
            </div>
            <!-- CASEIN -->
            <div data-target="proteine" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=200&h=200" alt="Casein" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Casein</span>
            </div>
            <!-- MASS GAINER -->
            <div data-target="massgainer" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=200&h=200&auto=format&fit=crop" alt="Mass Gainer" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mb-3" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Mass Gainer</span>
            </div>
            <!-- CRÉATINE -->
            <div data-target="creatine" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200&h=200" alt="Créatine" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Créatine</span>
            </div>
            <!-- PRE-WORKOUT -->
            <div data-target="booster" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=200&h=200" alt="Pre-Workout" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Pre-Workout</span>
            </div>
            <!-- BOOSTERS -->
            <div data-target="booster" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=200&h=200" alt="Boosters" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Boosters</span>
            </div>
            <!-- VITAMINES -->
            <div data-target="vitamines" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=200&h=200" alt="Vitamines" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Vitamines</span>
            </div>
            <!-- ACIDES AMINÉS -->
            <div data-target="acides" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722822180-2a212353f86e?auto=format&fit=crop&q=80&w=200&h=200" alt="Acides Aminés" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Acides Aminés</span>
            </div>
            <!-- COLLAGÈNE -->
            <div data-target="collagene" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=200&h=200" alt="Collagène" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Collagène</span>
            </div>
            <!-- FAT BURNER -->
            <div data-target="fatburner" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=200&h=200" alt="Fat Burner" class="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 mix-blend-multiply" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Fat Burner</span>
            </div>
            <!-- BARS & SNACKS -->
            <div data-target="snacks" class="category-item border-r border-b border-gray-100 bg-white flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=200&h=200" alt="Bars & Snacks" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mb-3" />
              <span class="text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase text-gray-500">Bars & Snacks</span>
            </div>
          </div>
        </div>
      </div>
`;

if (!html.includes('id="view-categories"')) {
    html = html.replace('<!-- Checkout Section', categoriesHtml + '\n      <!-- Checkout Section');
}

fs.writeFileSync('index.html', html);
console.log('view-categories restored');
