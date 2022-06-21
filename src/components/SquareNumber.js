import React from 'react'


const SquareNumber = (props) => {

    return (
        <button
            className={props.className ? "square key-number " + props.className : "square key-number"}
            type="button"
            onClick={() => props.onClick(props.value)}
        >
            {props.value}

        </button>
    )
}

export default SquareNumber;