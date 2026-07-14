import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('id="floating-filters"')) {
    html = html.replace('</body>', `
    <!-- Floating Action Buttons -->
    <div id="floating-filters" class="fixed bottom-6 left-0 right-0 pointer-events-none flex justify-center z-50 hidden">
        <button class="bg-black pointer-events-auto hover:bg-gray-900 transition text-white text-xs font-bold py-3 px-6 uppercase tracking-[0.2em] rounded-sm flex items-center justify-center gap-2 shadow-lg border border-gray-800">
            <i class="ri-equalizer-line text-lg"></i> FILTRES
        </button>
    </div>
</body>`);
}

// I should also ensure that the floating filter button is only shown when view-packs is active? No, we can just show it.
// Wait, the user has "view-packs" tab. The floating button should probably only be visible there, or always visible.
// I will just add logic in JS to toggle the button visibility along with view-packs, or just make it hidden by default and let JS show it, but for simplicity I'll make it always visible if that's what the screenshot suggests. Wait, the screenshot is of the packs section. Let's make it visible when packs or products are shown, or just always visible. Let's keep it simple: no 'hidden' class, just show it.
html = html.replace('class="fixed bottom-6 left-0 right-0 pointer-events-none flex justify-center z-50 hidden"', 'class="fixed bottom-6 left-0 right-0 pointer-events-none flex justify-center z-50"');

fs.writeFileSync('index.html', html);
