const ftoc = function(tempFarenheit) {
    let tempCelsius = (tempFarenheit - 32) * (5/9);
    return parseFloat(tempCelsius.toFixed(1));
}

const ctof = function(tempCelsius) {
    let tempFarenheit = (tempCelsius * (9/5)) + 32;
    return parseFloat(tempFarenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
