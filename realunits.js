// reserving npm module. coming soon

(function(){
  var wi = 20+7/8,
      hi = 11+3/4,
      wppi = screen.width/wi,
      hppi = screen.height/hi,
      diag = Math.sqrt(wi*wi+hi*hi);

realunits = {};

realunits.convert = function(value, sourceUnits, desiredUnits){
  return value*wppi;
}

// Support npm and regular indcluding
if( typeof module !== 'undefined' && module.exports) {
  module.exports = realunits;
}

})();
