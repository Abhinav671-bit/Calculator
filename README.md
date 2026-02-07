# Calculator

A browser-based calculator built as part of **The Odin Project – Foundations** curriculum.

This project implements a fully functional calculator that supports basic arithmetic operations, operator chaining, decimal input, and keyboard interaction, with careful handling of edge cases.

---

## 🔢 Features

### Basic arithmetic operations
- Addition
- Subtraction
- Multiplication
- Division

- Operator chaining (e.g. `12 + 7 - 1 = 18`)
- Decimal input (prevents multiple decimals in one number)
- Clear (`C`) functionality

### Keyboard support
- Numbers `0–9`
- Operators `+ - * /`
- `Enter` for equals
- `Backspace` for clear

### Prevents invalid operations
- Ignores consecutive operators
- Handles division by zero gracefully
- Prevents evaluation without sufficient input
- Resets result when starting a new calculation after `=`

---

## 🧠 What I Learned

- Managing application state using JavaScript variables
- Handling user input through both mouse and keyboard events
- Working with DOM manipulation and event listeners
- Implementing operator chaining without evaluating more than one pair of numbers at a time
- Using guard clauses to prevent invalid states
- Refactoring logic after achieving functionality
- Understanding arrow functions, event-driven execution, and control flow

---

## 🛠️ Built With

- HTML
- CSS
- JavaScript (Vanilla)

No external libraries or frameworks were used.