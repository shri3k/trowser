const readability = require('readability');
const jsdom = require('jsdom').JSDOM;

const content=[]; 
process.stdin.on('data', function(dat){
  content.push(dat);
}).on('end', function() {
  const doc = new jsdom(content.join(''));
  const reader = new readability(doc.window.document).parse();
  const text = reader.textContent.replace(/(\n)+/g, '\n');
  process.stdout.write(text);
}).on('error', function(err) {
  console.error(err);
});
