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

// const enteredValue = prompt("Enter a value");

// const radiusPara = document.querySelector("#radius");
// radiusPara.textContent +=  enteredValue;
// // console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// // console.log(resultPara);

// function calculateArea(radius) {
//   // references to p tags

//   // check if radius is not a number
//   if (isNaN(radius)) {
//     // alert("This is not a number");
//     // update the text of resultPara to show the error
//     resultPara.textContent = "This is not a number"

//   } else {
//     const area = Math.PI * radius * radius;
//     return area.toFixed(2);
//   }
// }

// let result = calculateArea(enteredValue);
// if (result) {
//   // update the radiusPara
//   // alert(`The area of a circle with radius ${enteredValue} is ${result}`);
//   resultPara.textContent =`The area of a circle with radius ${enteredValue} is ${result}`
// }

function populateList(myShoppingList) {
  // get access to the ul element
  const ulElement = document.querySelector("ul.shopping");
  // console.log(ulElement)
  // loop through myShoppingList array
  for (let item of myShoppingList) {
    // console.log(item);
    // make a new li document.createElement
    let newLi = document.createElement("li");
    // update the text of the new li
    newLi.textContent = item;
    // append the new li under ul
    ulElement.appendChild(newLi);
  }
}

let shoppingList = ["bread", "cheese", "green pepper"];
populateList(shoppingList);

function squareList() {
  // get access to the
  const ulElement = document.querySelector("ul.shopping");

  // remove circleList class
  ulElement.classList.remove("circleList");
  // add squareList class
  ulElement.classList.add("squareList")
}

squareList();
