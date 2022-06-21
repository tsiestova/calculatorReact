import React from 'react'


const SquareOperator = (props) => {

    return (
        <button
            className={props.className ? "square key-operator " + props.className : "square key-operator"}
            type="button"
            onClick={() => props.onClick(props.value)}
        >
            {props.value}

        </button>
    )
}


export default SquareOperator;