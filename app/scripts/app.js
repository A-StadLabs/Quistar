(function(document) {
  'use strict';

  
    if (window.navigator.standalone) {
      $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
      $('#in_web_clips').show();
    }
    else {
      $('#in_safari').show();
    }

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
