import React from 'react'
import SquareNumber from './SquareNumber.js'
import SquareOperator from "./SquareOperator";
import Display from './Display.js'

const Calculator = (props) => {

        return (
        <div className="board">
            <Display value={props.value}/>

            <SquareOperator value="+" onClick={props.onApplyOperator} />
            <SquareOperator value="-" onClick={props.onApplyOperator} />
            <SquareOperator value="x" onClick={props.onApplyOperator} />
            <SquareOperator value="÷" onClick={props.onApplyOperator} />

            <SquareNumber value="7" onClick={props.onUpdateValue} />
            <SquareNumber value="8" onClick={props.onUpdateValue} />
            <SquareNumber value="9" onClick={props.onUpdateValue} />
            <SquareOperator className={props.className} value="=" onClick={props.calculateValue} />


            <SquareNumber value="4" onClick={props.onUpdateValue} />
            <SquareNumber value="5" onClick={props.onUpdateValue} />
            <SquareNumber value="6" onClick={props.onUpdateValue} />

            <SquareNumber value="1" onClick={props.onUpdateValue} />
            <SquareNumber value="2" onClick={props.onUpdateValue} />
            <SquareNumber value="3" onClick={props.onUpdateValue} />

            <SquareNumber className="key-zero" value="0" onClick={props.onUpdateValue} />
            <SquareNumber value="." onClick={props.onUpdateValue} />
            <SquareNumber value="AC" onClick={props.clearValue} />

        </div>
    )

}

export default Calculator;

