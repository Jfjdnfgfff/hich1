const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the Ajouter button
html = html.replace(/<i class="ri-equalizer-line"><\/i>\s*Filtres \/ Ajouter/g, 'AJOUTER AU PANIER');

// Add floating filter button before </body>
if (!html.includes('FILTRES')) {
    html = html.replace('</body>', `
    <!-- Floating Action Buttons -->
    <div class="fixed bottom-6 left-0 right-0 pointer-events-none flex justify-center z-50">
        <button class="bg-black pointer-events-auto hover:bg-gray-900 transition text-white text-xs font-bold py-3 px-6 uppercase tracking-widest rounded-sm flex items-center justify-center gap-3 shadow-lg">
            <i class="ri-equalizer-line text-lg"></i> FILTRES
        </button>
    </div>
</body>`);
}

fs.writeFileSync('index.html', html);
console.log('Done');
