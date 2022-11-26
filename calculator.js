
let sum = document.getElementById("input");
const decimal = document.getElementById("decimal").value;

function display(num) {
  sum.value += num;
  if (decimal === ".") {
    document.getElementById("decimal").disabled = false;
  } else {
    document.getElementById("decimal").disabled = true;
  }
}

let calculate = (number) => {
  sum.value += number;
};
let addToSum = (operator) => {
  sum.value += operator;
 
};
function clearSum() {
  sum.value = " ";
}

function deleteSum() {
  sum.value = sum.value.slice(0, -1);
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






