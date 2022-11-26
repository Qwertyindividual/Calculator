
let sum = document.getElementById("input");

let calculate = (number) => {
  sum.value += number;
};
let addToSum = (operator) => {
  sum.value += operator;
  allowDecimal = true;
};

let evaluateSum = () => {
  try {
    sum.value = eval(sum.value);
  } catch (err) {
    alert(
      " Please enter a valid equation."
    );
    
  } 
};

function clearSum() {
  sum.value = "0";
  allowDecimal = true;
}

function deleteSum() {
  sum.value = sum.value.slice(0, -1);
}

