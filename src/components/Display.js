import React from 'react';

const Display =(props) => {

    return (
        <input
            type="text"
            className="display"
            value={props.value}
            autoFocus
        />
    )
}

export default Display;