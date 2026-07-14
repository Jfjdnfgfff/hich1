import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/\s*}\);\s*}\);\s*<\/script>/, '\n      });\n    </script>');
fs.writeFileSync('index.html', html);
