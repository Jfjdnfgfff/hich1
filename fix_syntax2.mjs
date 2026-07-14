import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

// There's an extra </div> or a missing one. Let's fix it by parsing the end correctly.
// we have:
//               </div> <!-- end of product 16 -->
//               </div> <!-- extra? -->
//             </div> <!-- grid -->
//           </div> <!-- max-w-6xl -->
//         </section>

html = html.replace('</div>\n              </div>\n            </div>\n          </div>\n        </section>', '</div>\n            </div>\n          </div>\n        </section>');

fs.writeFileSync('index.html', html);
