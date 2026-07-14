import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

// Replace the problematic closing tags at the end of view-packs / just before Checkout
const badClosing = `            </div>
          </div>
        </section>
      </div>

      <!-- Checkout Section`;

const goodClosing = `            </div>
          </div>
        </div>
      </div>

      <!-- Checkout Section`;

html = html.replace(badClosing, goodClosing);

fs.writeFileSync('index.html', html);
