const Calculator = { //creates object to keep track of values
    Display_Value: '0', //default displays 0 on the screen
    First_Operand: null, //will hold first entered operand, default at nothing
    Wait_Second_Operand: false, //checks for second operand
    operator: null, //holds the operator
};

function Input_Digit(digit) { //modifies when a button is pushed
    const { Display_Value, Wait_Second_Operand } = Calculator; //check to see if Wait_Second_Operand is true and set
    if (Wait_Second_Operand === true) { //Display_Value to the latest clicked key
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; //overwrites Display_Value if value is 0; otherwise adds onto it
    }
}

function Input_Decimal(dot) { //for the decimal point key/function
    if (Calculator.Wait_Second_Operand === true) return; //ensures accidental clicking of decimal doesn't cause bugs
    if (!Calculator.Display_Value.includes(dot)) { //if Display_Value does not include a decimal point, we want to add one
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //section for operators
    const { First_Operand, Display_Value, operator } = Calculator //operator key is pressed, convert current number on screen to a number and store result in Calculator.First_Operand
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) { //checks if operator already exists and if Wait_Second_Operand is true,
        Calculator.operator = Next_Operator;            //updates the operator and exits from the function
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //if operator exists, property lookup performed for the operator in the Perform_Calculation
        result = Number(result).toFixed(9)                                      //object and the function that matches that operator is executed
        result = (result * 1).toString() //remove trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

    const Perform_Calculation = { //these tell the function which operation to execute based on what is in the Handle_Operator function
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
        '=': (First_Operand, Second_Operand) => Second_Operand
    };

    function Calculator_Reset() { //this resets all stored values to default (no entries)
        Calculator.Display_Value = '0';
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }

    Update_Display(); //monitors button clicks
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event; //target variable is an object that represents the element that was clicked
        if (!target.matches('button')) { //if the element that was clicked on is not a button, exit the function
            return;
        }

        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }

        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }

        if (target.classList.contains('all-clear')) { //ensures that AC clears the numbers from the calculator
            Calculator_Reset();
            Update_Display();
            return;
        }

        Input_Digit(target.value);
        Update_Display();
    })