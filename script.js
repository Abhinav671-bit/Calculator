const buttons = document.getElementsByClassName("btn");

const display = document.querySelector(".Display")
let currentValue = "0";
let previousValue = "0";
let operator = null;
for (let btn of buttons) {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("number")) {
            const digit = btn.textContent;

            if (currentValue === "0") currentValue = digit;
            else currentValue += digit;
            display.textContent = currentValue;
        }
        else if (btn.classList.contains("operator")) {
            operator = btn.textContent;
            previousValue = currentValue;
            currentValue = "0";
            display.textContent = currentValue;
        }
        else if (btn.classList.contains("equals")) {

            let result;
            switch(operator){
                case "+":
                    result=Number(previousValue) + Number(currentValue);
                    break;
                case "-":
                    result=Number(previousValue) - Number(currentValue);
                    break;
                case "*":
                    result=Number(previousValue) * Number(currentValue);
                    break;
                case "/":
                    if(currentValue==="0"){
                        display.textContent="Invalid Input";
                        operator=null;
                        previousValue=null;
                        currentValue=0;
                        return;
                    }
                    result=Number(previousValue) / Number(currentValue);
                    break;
            }
            currentValue=String(result);
            display.textContent=currentValue;
            operator=null;
            previousValue=null;



            
        }
        else if(btn.classList.contains("clear")){
            let result="0";
            display.textContent=result;
            previousValue="0";
            currentValue="0";
            operator=null;
        }
    });
}



//Works for single elments only
// btn.addEventListener("click",() => {
//     console.log("Button clicked");
// });