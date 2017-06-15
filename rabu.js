//WEEK6 
const phi = 3.14;
const power = 2;
let radius = 0;
const calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
const area21 = calculateArea(radius);

radius = 7;
const area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);

console.log("-------------------");

// const multiply = function (num1, num2) {
//     return num1 * num2;
//   }
const multiply = (num1, num2) => num1 * num2;

  const divide = function (num1, num2) {
    return num1 / num2;
  }

  const doubleMe = function (num) {
    return num * 2;
  }

  console.log(multiply(5,2));
  console.log(divide(10,2));