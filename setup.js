import Reveal from './dist/reveal.esm.js';
import Math from './plugin/math/math.esm.js';

let pdfExport = window.location.search.match( /print-pdf/gi )

Reveal.initialize({
  controls: false,
  progress: false,
  slideNumber: 'c/t',
  center: false,
  history: true,
  transition: 'none',
  width: 1120, // default 960
  height: 700,
  margin: pdfExport ? 0.00 : 0.04,

  math: {
    // mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    TeX: {
      Macros: {
        R: '\\mathbb{R}',
        set: [ '\\left\\{#1 \\; ; \\; #2\\right\\}', 2 ]
      }
    }
  },

  plugins: [ Math ]
});

// make footer visible in normal mode and in print mode
var footer = document.querySelector('#background-template');
if (pdfExport) {
  Reveal.addEventListener('ready', function(event) {
    // add footer to every slide
    for (let slide of document.querySelectorAll('.slide-background')) {
      if (slide.classList.contains('stack')) {
        continue;
      }
      let clone = footer.cloneNode(true);
      slide.appendChild(clone)
    }
  });
}
