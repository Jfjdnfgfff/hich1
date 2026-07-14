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
              <!-- Product ${idx + 1} -->
              <div
                class="product-item bg-white border border-gray-200 flex flex-col group transition"
                data-category="${p.category}"
              >
                <div
                  class="relative p-6 flex-1 flex justify-center items-center h-56 sm:h-64 bg-white"
                >
                  <img
                    src="${p.img}"
                    alt="${p.title}"
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
                    ${p.title}
                  </h4>
                  <div class="text-sm sm:text-base font-black mb-3 text-black">
                    ${p.price}
                  </div>
                  <div
                    class="text-gray-300 text-[10px] sm:text-[11px] mb-4 flex items-center gap-0.5"
                  >
                    ${starsHtml}
                    <span class="text-gray-400 ml-1">(${p.rating})</span>
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

const topHtml = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Adem Nutrition - Suppléments de qualité premium</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Montserrat (Latin) and Cairo (Arabic) -->
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Cairo:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <!-- Remix Icons CDN for Icons -->
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Montserrat", "sans-serif"],
              arabic: ["Cairo", "sans-serif"],
            },
            colors: {
              "brand-black": "#0a0a0a",
              "brand-dark": "#1a1a1a",
              "brand-orange": "#ff5a00",
            },
          },
        },
      };
    </script>
  </head>
  <body class="bg-gray-50 text-gray-800 font-sans antialiased">
    <!-- Top Bar -->
    <div class="bg-black text-white text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <i class="ri-sparkling-fill text-gray-400"></i>
        <span>Suppléments de qualité premium — Livraison partout en Algérie</span>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1 border border-gray-700 px-2 py-0.5 rounded-sm bg-gray-900 cursor-pointer hover:bg-gray-800 transition">
          <i class="ri-truck-line text-brand-orange"></i>
        </div>
        <div class="border border-gray-700 px-2 py-0.5 rounded-sm cursor-pointer hover:bg-gray-800 transition">AR</div>
      </div>
    </div>

    <!-- Main Header -->
    <header class="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Hamburger -->
        <button id="menu-btn" class="text-2xl text-black hover:text-gray-600 transition">
          <i class="ri-menu-line"></i>
        </button>

        <!-- Logo -->
        <div class="text-xl sm:text-2xl font-black tracking-tighter uppercase cursor-pointer flex items-center">
          <span class="italic pr-1">ADEM</span>
          <span class="text-[10px] sm:text-xs tracking-widest font-bold mt-1">NUTRITION</span>
        </div>

        <!-- Icons -->
        <div class="flex items-center gap-4 sm:gap-6 text-xl">
          <button class="hover:text-gray-500 transition"><i class="ri-search-line"></i></button>
          <button class="hover:text-gray-500 transition hidden sm:block"><i class="ri-user-line"></i></button>
          <button class="hover:text-gray-500 transition relative">
            <i class="ri-shopping-bag-line"></i>
            <span class="absolute -top-1 -right-1.5 bg-[#0055ff] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="border-t border-gray-100 px-4 bg-white overflow-x-auto">
        <div class="max-w-7xl mx-auto flex gap-6 sm:gap-10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap py-3">
          <a href="#" id="nav-packs" class="hover:text-black transition">Packs</a>
          <a href="#" id="nav-products" class="text-black border-b-2 border-black pb-1 transition">Tous les produits</a>
          <a href="#" id="nav-categories" class="hover:text-black transition">Catégories</a>
          <a href="#" id="nav-sales" class="hover:text-black transition text-red-500">Soldes</a>
        </div>
      </nav>
    </header>

    <!-- Mobile Sidebar Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-black/50 z-50 hidden">
      <div id="mobile-menu-content" class="bg-white w-4/5 max-w-sm h-full flex flex-col transform -translate-x-full transition-transform duration-300 ease-in-out">
        <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <span class="font-bold tracking-widest uppercase text-sm">Menu</span>
          <button id="close-menu" class="text-2xl text-gray-500 hover:text-black"><i class="ri-close-line"></i></button>
        </div>
        <div class="flex flex-col py-2 overflow-y-auto font-bold text-xs tracking-widest uppercase text-gray-600">
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="all">Tous les produits</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="proteine">Protéine</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="massgainer">Mass Gainer</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="creatine">Créatine</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="booster">Pré-Workout & Boosters</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="acides">Acides Aminés</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="vitamines">Vitamines & Santé</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="fatburner">Fat Burner</a>
          <a href="#" class="sidebar-link p-4 border-b border-gray-50 hover:bg-gray-50 hover:text-black transition" data-target="collagene">Collagène</a>
          <a href="#" class="sidebar-link p-4 hover:bg-gray-50 hover:text-black transition" data-target="snacks">Bars & Snacks</a>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="w-full">
      <!-- Home / Products View -->
      <div id="view-home">
        <!-- Hero Banner (hidden when filtering) -->
        <div id="hero-banner" class="w-full bg-[#1a1a1a] text-white py-12 sm:py-20 px-4 text-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover" alt="Background" />
          </div>
          <div class="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h1 class="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tight italic">
              Dépassez vos <span class="text-brand-orange">Limites</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-300 font-medium mb-8 max-w-lg">
              Découvrez notre sélection des meilleurs suppléments sportifs mondiaux pour atteindre vos objectifs physiques.
            </p>
            <button class="bg-white text-black font-bold uppercase tracking-widest text-xs sm:text-sm px-8 py-4 hover:bg-gray-200 transition">
              Acheter Maintenant
            </button>
          </div>
        </div>

        <!-- Products Grid Section -->
        <section class="p-4 sm:p-8 bg-gray-50 border-t border-gray-100">
          <div class="max-w-6xl mx-auto">
            <div id="products-tabs" class="flex font-bold text-[11px] sm:text-xs mb-6 uppercase tracking-widest border-b pb-2">
              <span class="mr-6 cursor-pointer border-b-2 border-black pb-2 -mb-[10px]">Nouveautés</span>
              <span class="text-gray-400 cursor-pointer hover:text-black transition pb-2">Meilleures Ventes</span>
            </div>
            <div id="category-header" class="hidden justify-between items-end mb-6 border-b pb-4">
              <h2 id="category-title" class="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                PROTÉINE
              </h2>
              <span id="category-count" class="text-gray-500 text-sm font-bold">0 produits</span>
            </div>
            
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
`;

let currentHtml = fs.readFileSync('index.html', 'utf8');
const tailHtml = currentHtml.substring(currentHtml.indexOf('<!-- Packs View -->'));

// Build the final HTML string
const finalHtml = topHtml + htmlStr + `
            </div>
          </div>
        </section>
      </div>

      ` + tailHtml;

fs.writeFileSync('index.html', finalHtml);
console.log('Restored index.html');
