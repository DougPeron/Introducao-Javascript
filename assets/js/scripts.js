var currentNumberWrapper = document.getElementById('currentNumber')
var valor1 = document.getElementById('mais')
var valor2 = document.getElementById('menos')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        valor1.style.color = "#3D0000"
        valor1.style.backgroundColor = "#ff0000"
    }
    if(currentNumber < 10){
        valor1.style.color = "#99A799"
        valor2.style.color = "#99A799"
        valor1.style.backgroundColor = "#D3E4CD"
        valor2.style.backgroundColor = "#D3E4CD"
    }
    if(currentNumber <= -10){
        valor2.style.color = "#3D0000"
        valor2.style.backgroundColor = "#ff0000"
    }
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        valor1.style.color = "#3D0000"
        valor1.style.backgroundColor = "#ff0000"
    }
    if(currentNumber < 10){
        valor1.style.color = "#99A799"
        valor2.style.color = "#99A799"
        valor1.style.backgroundColor = "#D3E4CD"
        valor2.style.backgroundColor = "#D3E4CD"
    }
    if(currentNumber <= -10){
        valor2.style.color = "#3D0000"
        valor2.style.backgroundColor = "#ff0000"
    }
}

