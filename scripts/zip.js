(function(module) {
  var zip = {};

  // TODO: check the README.me for full instructions!
  getData = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      // TODO: start here!
    });
  };

  getData();
  module.zip = zip;
})(window);
