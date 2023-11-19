const buttonElement = document.querySelectorAll("button");

const resultField = document.getElementById("output");

for(let i = 0; i < buttonElement.length; i++){
    buttonElement[i].addEventListener("click" , () => {
        const buttonValue = buttonElement[i].textContent;
        if ( buttonValue === "C"){
            clearScreen();
        } else if (buttonValue === "="){
            evaluateResult();
        }else if (buttonValue === "DEL"){
            deleteChar(); 
        }
        else{
            appendValue(buttonValue);
        }
    } );
}

function clearScreen(){
    resultField.value = "";
}

function deleteChar(){
    resultField.value = resultField.value.toString().slice(0,-1)
}

function evaluateResult(){
    resultField.value = eval(resultField.value);
}

function appendValue(buttonValue) {
    resultField.value += buttonValue;
}
