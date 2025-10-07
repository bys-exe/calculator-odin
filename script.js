function add(a,b){
    sum = a+b;
    return sum;
}
function subtract(a,b){
    subtract = a-b;
    return subtract;
}
function multiply(a,b){
    multiply = a*b;
    return multiply;
}
function divide(a,b){
    divide = a/b;
    return divide;
}
let value1;
let value2;
let operation;
function operate(value1, value2, operation){
    if(operation == '+'){
        return add(value1, value2);
    }else if(operation == '-'){
        return subtract(value1, value2);
    }else if(operation == '*'){
        return multiply(value1, value2);
    }else if(operation == '/'){
        return divide(value1, value2);
    }
}