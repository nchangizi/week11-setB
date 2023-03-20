// function declaration
// function greet(name, time="day")
// {
//     console.log(`Good ${time} ${name}`);
// }
// // function calling
// greet("Neda","night");

// // function expression
// const greet = function (name)
// {
//     console.log(`Hello ${name}`);
// }
// // function calling
// greet("Neda");
// function expression
// const greet =  (name) =>
// {
//     console.log(`Hello ${name}`);
// }
// // function calling
// greet();

const enteredValue = prompt("Enter a value");
function calculateArea(radius) {
  // check if radius is not a number
  if (isNaN(radius)) {
    alert("This is not a number");
  } else {
    const area = Math.PI * radius * radius;
    return area.toFixed(2);
  }
}

let result = calculateArea(enteredValue);
if (result) {
  alert(`The area of a circle with radius ${enteredValue} is ${result}`);
}
