const convertToCelsius = function(degreef) {
  let degreec=((degreef-32)*5/9)
  if(degreec%1!=0){
    degreec=Math.round(degreec*10)/10;
  }
  return degreec;
};

const convertToFahrenheit = function(degreec) {
  let degreef=((9*degreec/5) + 32);
  if(degreef%1!=0){
    degreef=Math.round(degreef*10)/10;
  }
  return degreef;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
