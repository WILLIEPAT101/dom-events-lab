/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let value1 = null
let value2 = null
let operation = null
let total = null
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    

  
    if (event.target.classList.contains('number')) {
        if (operation != null){
            if (value2===null){
                value2 = event.target.innerText
                display.innerText=value2
            }else {
                value2+= event.target.innerText
                display.innerText=value2
            } 
        }
        if (value1===null){
            value1 = event.target.innerText
            display.innerText=value1
        }else if(value1 != null && operation===null){
            value1+= event.target.innerText
            display.innerText=value1
        }
        console.log ("value1 ", value1)
        console.log ("value2 ", value2)
    }
  
    if (event.target.classList.contains("operator")) {
        if (event.target.innerText==="C"){
             value1 = null
            value2 = null
            operation = null
            total = null
            display.innerText = ""
            return
        }
        operation=event.target.innerText
        console.log ("operation ", operation)
    }
    if (event.target.classList.contains('equals')){
        if (operation==="+"){
            total= parseInt(value1) + parseInt(value2) 
        }
        if (operation==="-"){
            total= parseInt(value1) - parseInt(value2) 
        }
        if (operation==="/"){
            total= parseInt(value1) / parseInt(value2) 
        }
        if (operation==="*"){
            total= parseInt(value1) * parseInt(value2) 
        }
        display.innerText=total
        console.log("total ", total)
    }
  });
  
/*-------------------------------- Functions --------------------------------*/
