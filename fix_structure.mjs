import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const missingHtml = `
            </div>
          </div>
        </section>
      </div>

      <!-- Packs View -->
      <div id="view-packs" class="hidden bg-gray-50 pb-12">
        <div class="max-w-4xl mx-auto border-t border-gray-100">
          <div class="flex flex-col gap-6 p-4 sm:p-6">
`;

// Replace the place where `<!-- Pack Prise de Masse -->` starts.
// But only the first occurrence after the products grid!
html = html.replace('<!-- Pack Prise de Masse -->', missingHtml + '              <!-- Pack Prise de Masse -->');

fs.writeFileSync('index.html', html);
