import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Replace the quantity + button rows
html = html.replace(/<div class="mt-2 flex gap-4">([\s\S]*?)<\/button>\s*<\/div>/g, (match) => {
    return `<div class="mt-2 flex gap-2 h-[48px]">
                  <!-- Quantity Input -->
                  <input
                    type="number"
                    value="1"
                    min="1"
                    class="border border-gray-300 w-[60px] text-center text-sm font-semibold focus:outline-none focus:border-black rounded-sm bg-white"
                  />

                  <!-- Action Button -->
                  <button
                    class="bg-black hover:bg-gray-900 transition text-white text-[10px] sm:text-xs font-bold px-2 sm:px-4 flex-1 uppercase tracking-widest rounded-sm flex items-center justify-center"
                  >
                    AJOUTER AU PANIER
                  </button>
                </div>`;
});

// Update the floating filters section to include the eye icon
const floatingRegex = /<div\s+id="floating-filters"[\s\S]*?<\/div>\s*<\/div>/;
const newFloating = `<div
      id="floating-filters"
      class="fixed bottom-0 left-0 right-0 pointer-events-none z-50 pb-6 px-4"
    >
      <div class="max-w-3xl mx-auto flex justify-center relative items-end">
        <button
          class="bg-black pointer-events-auto hover:bg-gray-900 transition text-white text-xs font-bold py-3 px-8 uppercase tracking-[0.2em] rounded-sm flex items-center justify-center gap-2 shadow-lg border border-gray-800"
        >
          <i class="ri-equalizer-line text-lg"></i> FILTRES
        </button>
        <button class="absolute right-0 bottom-0 pointer-events-auto bg-gray-100 hover:bg-gray-200 border border-gray-200 w-11 h-11 flex items-center justify-center text-gray-700 transition rounded-sm shadow-lg">
          <i class="ri-eye-line text-xl"></i>
        </button>
      </div>
    </div>`;

html = html.replace(/<div\s+id="floating-filters"[\s\S]*?<\/div>\s*<\/div>/, newFloating);

// Make ACHAT DIRECT without top margin and attach directly to the image. 
// Right now ACHAT DIRECT has: `class="bg-[#2a2a2a] text-white text-[11px] sm:text-xs text-center py-4 tracking-[0.2em] font-bold uppercase cursor-pointer hover:bg-black w-full"`
// It already is right below the image. But let's check spacing.

// We should also replace the bottom blur gradient over the packs? The screenshot has a slight white gradient on the background where the floating button is, so the floating button is visible.
html = html.replace('pb-6 px-4"', 'pb-6 px-4 bg-gradient-to-t from-white/90 via-white/50 to-transparent pt-12"');

fs.writeFileSync('index.html', html);
console.log('Fixed packs');
