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

    if(keyVal === "ac") {
        display.innerHTML = "";
    }

     else if(keyVal === '=') {
        let equation = inputVal;
        display.innerHTML = eval(equation);
    }else {
        display.innerHTML += keyVal;
    }

}

