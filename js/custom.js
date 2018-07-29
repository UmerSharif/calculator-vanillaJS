let buttons = document.querySelectorAll('#buttons');
let display = document.getElementById('display');

for(let button of buttons){

    button.addEventListener('click', handleButton);

}

function handleButton(e){

    if (e.target.tagName !== 'BUTTON') {

        return;
    }

    let keyVal = e.target.value;
    let inputVal = display.innerHTML;
    let operators = ['+','-','*','/'];

    if(keyVal === "ac") {
        display.innerHTML = "";
    }

     else if(keyVal === '=') {
        let equation = inputVal;

        let lastChar = equation[equation.length - 1];

        // removing the last character if its not a number
        // method 1

        /*if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.'){
            equation = equation.replace(/.$/, "");
        }*/

        // removing last char if its not a number method 2, short and cool

        if(operators.indexOf(lastChar > -1 || lastChar === '.')){
            equation = equation.replace(/.$/, ""); //.$ will match any character at the end of a string.
        }


        display.innerHTML = eval(equation);
    }else {
        display.innerHTML += keyVal;
    }

}

