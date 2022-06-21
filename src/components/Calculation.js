import React from 'react'
import Calculator from './Calculator.js'

export default () => {

    const [pressedValue, setPressedValue] = React.useState({
        currentValue: "",
        previousValue: "",
        operator: "",
        display: "0"
    });

    const updateCurrentValue = (value) => {
        setPressedValue({
            ...pressedValue,
            currentValue: pressedValue.currentValue + value,
            display: (pressedValue.operator && pressedValue.previousValue) ?
                pressedValue.previousValue + " " + pressedValue.operator + " " + (pressedValue.currentValue + value) :
                pressedValue.currentValue + value,
        })
    }

    const applyOperator = (operator) => {

        setPressedValue({
            ...pressedValue,
            operator: operator,
            currentValue: "",
            previousValue: pressedValue.currentValue,
            display: pressedValue.currentValue + " " + operator
        })
    }

    const clearValue = () => {
        setPressedValue({
            ...pressedValue,
            previousValue: "",
            currentValue: "",
            operator: "",
            display: "0"
        })
    }


    const math = (mathOperator, a, b) => {
        let result;

        switch (mathOperator) {
            case "+":
                result = parseFloat(a) + parseFloat(b);
                break;
            case "-":
                result = a - b;
                break;
            case "x":
                result = a * b;
                break;
            case "÷":
                result = a / b;
                break;
        }

        return result;
    }

    const calculateValue = () => {
        let result = math(pressedValue.operator, pressedValue.previousValue, pressedValue.currentValue);

        setPressedValue({
            ...pressedValue,
            display: result
        })
    }

    return (
        <div>
            <Calculator
                value={pressedValue.display}
                onUpdateValue={updateCurrentValue}
                onApplyOperator={applyOperator}
                clearValue={clearValue}
                calculateValue={calculateValue}
                className={"key-equal"}/>
        </div>
    )
}
