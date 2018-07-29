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

        if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.'){
            equation = equation.replace(/.$/, "");
        }


        display.innerHTML = eval(equation);
    }else {
        display.innerHTML += keyVal;
    }

}

