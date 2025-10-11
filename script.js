function add(a, b) {
  result = a + b;
  return result;
}
function subtract(a, b) {
  result = a - b;
  return result;
}
function multiply(a, b) {
  result = a * b;
  return result;
}
function divide(a, b) {
  result = a / b;
  return result;
}

function operate(value1, value2, operation) {
  if (operation == "+") {
    return add(value1, value2);
  } else if (operation == "-") {
    return subtract(value1, value2);
  } else if (operation == "*") {
    return multiply(value1, value2);
  } else if (operation == "/") {
    return divide(value1, value2);
  }
}

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

value1 = null;
value2 = null;
operation = null;

for (let button of buttons) {
  button.addEventListener("click", () => {
    let btnText = button.innerText;
    if (!isNaN(btnText)) {
      if (operation === null) {
        value1 =
          (value1 === null || value1 === undefined ? "" : value1) + btnText;
        display.innerHTML = value1;
      } else {
        value2 =
          (value2 === null || value2 === undefined ? "" : value2) + btnText;
        display.innerHTML = value1 + " " + operation + " " + value2;
      }
    } else if (["+", "-", "*", "/"].includes(btnText)) {
      if (value1 != null && value2 != null) {
        let result = operate(parseInt(value1), parseInt(value2), operation);
        value1 = result;
        value2 = null;
        display.innerHTML = result;
      }
      operation = btnText;
      display.innerHTML += " " + operation;
    } else if (btnText === "=") {
      if (value1 !== null && value2 !== null && operation !== null) {
        let result = operate(parseInt(value1), parseInt(value2), operation);
        display.innerHTML = result;
        value1 = result;
        value2 = null;
        operation = null;
      } else {
        display.innerHTML = value1 !== null ? value1 : 0;
      }
    } else if (btnText === "C") {
      value1 = null;
      value2 = null;
      operation = null;
      display.innerHTML = "";
    }
  });
}
