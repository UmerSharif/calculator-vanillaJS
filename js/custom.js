let buttons = document.querySelectorAll('#buttons');
let display = document.getElementById('display');
let decimalPresent = true;

for (let button of buttons) {

    button.addEventListener('click', handleButton);

}

function handleButton(e) {

    if (e.target.tagName !== 'BUTTON') {

        return;
    }

    let keyVal = e.target.value;
    let inputData = display.innerHTML;
    let operators = ['+', '-', '*', '/'];
    //let numbers = ['1','2','3','4','5','6','7','8','9','0'];


    if (keyVal === "ac") {
        display.innerHTML = "0";
        decimalPresent = true; // when ever input is cleared, turn decimal to true
    }

    else if (keyVal === '=') {

        let equation = inputData;
        let lastChar = equation[equation.length - 1];
        let checkDecimal = ".";

        // if there is decimal in the final answer make the decimalPresent false to avoid adding more decimal
        if(inputData.indexOf(checkDecimal) > -1) {
            decimalPresent = false;
        }


        // removing the last character if its not a number
        // method 1

        /*if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.'){
            equation = equation.replace(/.$/, "");
        }*/

        // removing last char if its not a number method 2, short and cool

        if (operators.indexOf(lastChar) > -1 || lastChar === '.') {
            equation = equation.replace(/.$/, ""); //.$ will match any character at the end of a string.
        }
            display.innerHTML = eval(equation);
    }


    // more tasks some restriction regarding operators

    else if (operators.indexOf(keyVal) > -1) { // if operator is pressed
        decimalPresent = true;
        let lastChar = inputData[inputData.length - 1];
        // only add operator if data is not empty and lastchar is not an operator
        if (inputData !== "0" && operators.indexOf(lastChar) === -1){ // when the second condition i false run the if {
            display.innerHTML += keyVal;
        }

        // if last char is operator and if another operator is pressed replace the previous one
        // also if the first character is "-" do not replace it.
        if (operators.indexOf(lastChar) > -1 && inputData.length > 1) {
            display.innerHTML = inputData.replace(/.$/, keyVal);
        }
        // only allow "-" sign to appear before any digits
        if (inputData === "0" && keyVal === "-") {
            display.innerHTML = inputData.replace("0", keyVal);
        }

    }

    // logic for decimal starts

   else if(keyVal === '.'){

        /*let lastOperator = inputData[inputData.length - 1];
        let secondLastOperator = inputData[inputData.length - 2];
        let secondLastDigit = inputData[inputData.length - 2];
        let lastDigit = inputData[inputData.length - 1];*/

       if(decimalPresent){
           display.innerHTML += keyVal;
           decimalPresent = !decimalPresent;
       }

       // to allow decimal after the last two inputs are either operator and digit or digit and operator like(+6 or 6+)
           // this condition can be replaced by only adding decimalpresent = true when any operator is pressed. in the operator section

       /*else if(numbers.indexOf(secondLastDigit) > -1 && operators.indexOf(lastOperator) > -1 || numbers.indexOf(lastDigit) > -1 && operators.indexOf(secondLastOperator) > -1 ) {

               display.innerHTML += keyVal;
           }*/
    }
    //logic for decimal ends
    else {
        //When inputting numbers, my calculator should not allow a number to begin with multiple zeros
        if(inputData === '0'){
            display.innerHTML = inputData.replace("0","");
        }
            display.innerHTML += keyVal;
    }
}