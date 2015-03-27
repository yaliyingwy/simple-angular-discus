(function() {
  'use strict';
  var app;

  app = angular.module('simpleDisqus', []);

  app.directive('disqus', [
    '$document', '$compile', function($document, $compile) {
      return {
        restrict: 'A',
        template: '<div id="disqus_thread"></div>',
        scope: {
          shortname: '@'
        },
        replace: true,
        link: function($scope, $elem, $attrs) {
          var script;
          script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = '//' + 'shortname' + '.disqus.com/embed.js';
          return $elem.append(angular.element(script));
        }
      };
    }
  ]);

}).call(this);
