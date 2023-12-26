

// Decimal floor
if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  
   function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  

module.exports = { getRandomInt}
