import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Find the view-packs div
const viewPacksStart = html.indexOf('id="view-packs"');
const viewPacksEnd = html.indexOf('</section>', viewPacksStart) + 10;

let viewPacksHtml = html.substring(viewPacksStart, viewPacksEnd);

// Replace the image container padding and image classes to make them tall
// 1. Remove p-4 sm:p-8 from the image container
viewPacksHtml = viewPacksHtml.replace(/class="relative bg-white flex justify-center items-center p-4 sm:p-8"/g, 'class="relative bg-white flex justify-center items-center"');

// 2. Make pack34.jpg tall
viewPacksHtml = viewPacksHtml.replace(/<img\s+src="pack34\.jpg"[\s\S]*?class="w-full object-contain max-h-\[500px\]"\s*\/>/g, 
  '<img src="pack34.jpg" alt="Pack 34" class="w-full object-contain h-[500px] sm:h-[700px] p-4" />');

// 3. Make Unsplash images tall
viewPacksHtml = viewPacksHtml.replace(/<img\s+src="(https:\/\/images\.unsplash\.com[\s\S]*?)"[\s\S]*?alt="(.*?)"[\s\S]*?class="w-full object-contain max-h-\[500px\]"\s*\/>/g, 
  '<img src="$1" alt="$2" class="w-full object-cover h-[500px] sm:h-[700px]" />');

html = html.substring(0, viewPacksStart) + viewPacksHtml + html.substring(viewPacksEnd);

fs.writeFileSync('index.html', html);
console.log('Images made tall');
