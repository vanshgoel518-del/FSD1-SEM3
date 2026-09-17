//const calculateArea =  require("./common")
//console.log(calculateArea(3));
//const calculatePerimeter = require("./common")
//console.log(calculatePerimeter(3));// yha output 18.84 aayega dono baar kyuki ye overwrite kr dega calculate area ko 
// is problem se abchne ke liye common.js me module.exports ke andar object pass krna hoga jisme dono function ho

const {calculateArea, calculatePerimeter} = require("./common");
console.log(calculateArea(3));
console.log(calculatePerimeter(3));