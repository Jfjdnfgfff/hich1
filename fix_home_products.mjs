import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// The packs are placed in the view-home grid.
// First, find where the packs start in view-home
// Pack Prise de Masse starts around here: <!-- Pack Prise de Masse -->
// and ends where view-home ends. Let's find exactly the bounds.

const packsStart = html.indexOf('<!-- Pack Prise de Masse -->');
const packsEnd = html.indexOf('</div>\n        </section>', packsStart); // End of the grid/section

// Wait, the grid div closes before the section closes.
// Let's use a regex to match from <!-- Pack Prise de Masse --> to the end of the grid.
// Let's check the HTML around the end of the grid.
