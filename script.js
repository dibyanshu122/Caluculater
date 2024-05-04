let display = document.getElementById("display");
let output = document.getElementById("display1");

function appendToDisplay(value) {
    // Append the value to the input element's current value
    display.value = display.value + " " + value
}

function deleteText() {
    // Get the current value of the input element
    let currentValue = display.value;
    // Remove the last character from the current value
    let newValue = currentValue.slice(0, -1);
    // Update the input element's value with the new value
    display.value = newValue;
}

function clearDisplay() {
    // Clear the input element's value
    display.value = "";
    output.value = "";
}

const calculate = () => {
    output.value = eval(display.value) 
}

// function calculate()  {
//   if ("+"){
//     //  a = "4" + "4";
//     let sum = value+value;
//     display1.innerHTML = sum;
//   }
//   else if ("-"){
//     let sub = value-value;
//     display1.innerHTML = sub;

//   }
//   else if ("*"){
//     let mul = value*value;
//     display1.innerHTML = mul;

//   }
//   else if("/"){
//     let sbt = value+value;
//     display1.innerHTML = sbt;
//   }
// }




// let is used for functions const use for functions and also const use out side the function, var used within function just like let


// const checkVariables = () => {
//     let a = 20;
//     const b = 30;
//     var c = 40;

//     console.log("let within function", a) //YES
//     console.log("const within function", b) //YES
//     console.log("varf within function", c)//Yes
// }


// console.log("let outSide function", a) // NO
// console.log("const outSide function", b) // Yes
// console.log("var outSide function", c) // No 

// checkVariables();
