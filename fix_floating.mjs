import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const floatingRegex = /<div\s+id="floating-filters"[\s\S]*?<\/div>\s*<\/body>/;
const newFloating = `<div
      id="floating-filters"
      class="fixed bottom-0 left-0 right-0 pointer-events-none z-50 pb-6 pt-12 px-4 bg-gradient-to-t from-white/90 via-white/50 to-transparent"
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
    </div>
  </body>`;

html = html.replace(floatingRegex, newFloating);

fs.writeFileSync('index.html', html);
