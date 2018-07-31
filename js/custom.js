let buttons = document.querySelectorAll('#buttons');
let display = document.getElementById('display');

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

    if (keyVal === "ac") {
        display.innerHTML = "0";
    }

    else if (keyVal === '=') {

        let equation = inputData;

        let lastChar = equation[equation.length - 1];

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

    else if (operators.indexOf(keyVal) > -1) {


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



    // logic for decimal
   /* else if(keyVal === lastDecimal){
        display.innerHTML = inputData.replace(".",".");
    }*/
    //logic for decimal ends

    else {
        //When inputting numbers, my calculator should not allow a number to begin with multiple zeros
        if(inputData === '0'){
            display.innerHTML = inputData.replace("0","");
        }
        display.innerHTML += keyVal;
    }

}