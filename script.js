const buttons = document.getElementsByClassName("btn");

const display = document.querySelector(".Display")
let currentValue = "0";
let previousValue = "0";
let operator = null;
let justcalculated = false;

document.addEventListener("keydown", handleKey);

function handleKey(e) {
    const key = e.key;
    const btn = [...buttons].find(
        b =>
            b.textContent === key ||
            (key === "Enter" && b.classList.contains("equals")) ||
            (key === "Backspace" && b.classList.contains("clear"))
        //“The arrow function returns a condition..find() returns the button.”

    );
    if (btn) btn.click();
}


for (let btn of buttons) {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("number")) {
            if (justcalculated === true) {
                currentValue = "0";
                previousValue = null;
                operator = null;
                justcalculated = false;
            }

            const digit = btn.textContent;

            if (currentValue === "0") currentValue = digit;
            else currentValue += digit;
            display.textContent = currentValue;
        }
        else if (btn.classList.contains("operator")) {
            if (operator !== null && currentValue === "0") {
                operator = btn.textContent;
                return;
            }
            if (operator !== null && currentValue !== "0") {
                let result;
                switch (operator) {
                    case "+":
                        result = Number(previousValue) + Number(currentValue);
                        break;
                    case "-":
                        result = Number(previousValue) - Number(currentValue);
                        break;
                    case "*":
                        result = Number(previousValue) * Number(currentValue);
                        break;
                    case "/":
                        if (currentValue === "0") {
                            display.textContent = "Invalid Input";
                            operator = null;
                            previousValue = null;
                            currentValue = "0";
                            return;
                        }
                        result = Number(previousValue) / Number(currentValue);
                        break;
                }
                currentValue = String(result);
                display.textContent = currentValue;
                previousValue = currentValue;
            }
            else{
                previousValue=currentValue;
            }
            operator = btn.textContent;
            currentValue = "0";      
        }
        else if (btn.classList.contains("equals")) {
            if (operator === null) return;

            let result;
            switch (operator) {
                case "+":
                    result = Number(previousValue) + Number(currentValue);
                    break;
                case "-":
                    result = Number(previousValue) - Number(currentValue);
                    break;
                case "*":
                    result = Number(previousValue) * Number(currentValue);
                    break;
                case "/":
                    if (currentValue === "0") {
                        display.textContent = "Invalid Input";
                        operator = null;
                        previousValue = null;
                        currentValue = "0";
                        return;
                    }
                    result = Number(previousValue) / Number(currentValue);
                    break;
            }
            currentValue = String(result);
            display.textContent = currentValue;
            operator = null;
            previousValue = null;

            justcalculated = true;
        }
        else if (btn.classList.contains("clear")) {
            let result = "0";
            display.textContent = result;
            previousValue = "0";
            currentValue = "0";
            operator = null;
            justcalculated = false;
        }
        else if (btn.classList.contains("dot")) {
            if (justcalculated) {
                currentValue = "0";
                justcalculated = false;
            }
            if (currentValue.includes(".")) return;
            currentValue += ".";
            display.textContent = currentValue;
        }
    });
}

