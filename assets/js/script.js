(function() {

  // TODO: Fix this hack within ReavealExpress so it would start this script after loading the HTML into the DOM
  setTimeout(function() {
    prismjsDebugger.initialize(document.getElementById('hello-world'), [
      { number: 1 },
      { number: 5, console: 'hello' },
      { number: 2, console: 'world' }
    ], true);
  }, 500);

})();