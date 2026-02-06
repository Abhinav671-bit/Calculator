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
            if (operator === "+") {
                const result = Number(previousValue) + Number(currentValue);
                currentValue = String(result);
                display.textContent = currentValue;
                operator = null;
                previousValue = null;
            }
            if (operator === "-") {
                const result = Number(previousValue) - Number(currentValue);
                currentValue = String(result);
                display.textContent = currentValue;
                operator = null;
                previousValue = null;
            }
            if (operator === "*") {
                const result = Number(previousValue) * Number(currentValue);
                currentValue = String(result);
                display.textContent = currentValue;
                operator = null;
                previousValue = null;
            }
            if (operator === "/") {
                if (currentValue === "0") {
                    let result = "Invalid Input";
                    display.textContent=result;
                }
                else {
                    const result = Number(previousValue) / Number(currentValue);
                    currentValue = String(result);
                    display.textContent = currentValue;
                    operator = null;
                    previousValue = null;
                }
            }
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