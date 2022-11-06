const buttons = document.querySelectorAll(".btns");
const screen = document.querySelector("#screen");
const math = document.querySelectorAll(".nan");
const clear = document.querySelector("#delete");
const dot = document.querySelector("#dot");

let display = "";

function populate(){
    buttons.forEach(btn => {
        btn.addEventListener("click",(e) =>{

            display += e.target.innerText;
            screen.innerText = display;
          
        })
    })
    
}

clear.addEventListener("click",() => {
    screen.innerText = 0;
})
    

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function square(num){
    return Math.pow(num,2)
}

function conversion(num){
    return num *= -1
}


populate();