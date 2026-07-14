import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  'class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"',
  'class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4"'
);

fs.writeFileSync('index.html', html);
console.log('Grid updated');
