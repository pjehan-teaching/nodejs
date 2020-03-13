import Prism from 'prismjs';
import prismjsDebugger from './js/prismjs-debugger';
import 'font-awesome/scss/font-awesome.scss';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images
require.context('./videos', false, /\.(avi|mpeg|mp4|webm)$/); // Import all videos

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  setTimeout(function() {
    prismjsDebugger.initialize(document.getElementById('hello-world'), [
      { number: 1 },
      { number: 5, console: 'hello' },
      { number: 2, console: 'world' }
    ], true);
  }, 500);

});
