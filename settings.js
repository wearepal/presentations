import Reveal from './dist/reveal.esm.js';
import Markdown from './plugin/markdown/markdown.esm.js';
import Math from './plugin/math/math.esm.js';
import Notes from './plugin/notes/notes.esm.js';

// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
markdown: {
  smartypants: true,
  gfm: true
},
math: {
  mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
  config: 'TeX-AMS_HTML-full'
},
plugins: [ Notes, Markdown, Math ],
// The "normal" size of the presentation, aspect ratio will be preserved when the presentation is scaled to fit different resolutions
width: 1120, // default 960
height: 700,
// Factor of the display size that should remain empty around the content
margin: 0.04,
// Bounds for smallest/largest possible scale to apply to content
minScale: 0.2,
maxScale: 2.0,
// Help the user learn the controls by providing hints, for example by bouncing the down arrow when they first encounter a vertical slide
controlsTutorial: false,
// Display a presentation progress bar
progress: false,
// Display the page number of the current slide
slideNumber: 'c/t',
// Push each slide change to the browser history
history: true,
// Enable the slide overview mode
overview: true,
// Vertical centering of slides
center: false,
// Turns fragments on and off globally
fragments: true,
// whether the presentation is running in an embedded mode, i.e. contained within a limited portion of the screen
embedded: false,
// whether speaker notes should be visible to all viewers
showNotes: false,
// Enable slide navigation via mouse wheel
mouseWheel: false,
// Hides the address bar on mobile devices
hideAddressBar: true,
// Transition style
transition: 'none', // none/fade/slide/convex/concave/zoom
// Transition style for full page slide backgrounds
backgroundTransition: 'none', // none/fade/slide/convex/concave/zoom
// Number of slides away from the current that are visible in overview
viewDistance: 3,
});

// make footer visible in normal mode and in print mode
var footer = document.querySelector('#static-content');
if (window.location.search.match( /print-pdf/gi )) {
  Reveal.addEventListener('ready', function(event) {
    // add footer to every slide
    for (let slide of document.querySelectorAll('.slide-background')) {
      if (slide.classList.contains('stack')) {
        continue;
      }
      let clone = footer.cloneNode(true);
      while (clone.firstChild) {
          slide.appendChild(clone.firstChild);
      }
    }
  });
} else {
  // add footer to the shared background
  let clone = footer.cloneNode(true);
  while (clone.firstChild) {
    document.querySelector('div.reveal').append(clone.firstChild);
  }
}
