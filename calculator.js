
let sum = document.getElementById("input");

let calculate = (number) => {
  sum.value += number;
};
let addToSum = (operator) => {
  sum.value += operator;
 
};

let evaluateSum = () => {
  try {
    sum.value = eval(sum.value);
  } catch (err) {
    // sum.innerText = "Invalid"
    alert(
      " Please enter a valid equation."
    );
  }
} 

function clearSum() {
  sum.value = "0";
}

function deleteSum() {
  sum.value = sum.value.slice(0, -1);
};

function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}
// function decimal() {
//   if('.' > 1) {
//   return " ";
//   } else {
//     return "."
//   }
// };

