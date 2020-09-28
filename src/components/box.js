import React from 'react';


const boxStyle = {
    height: 50,
    width: 50,
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
}

export const Box = (props) => {

    return(
        <div className='board_box' onClick={props.onClick} style={boxStyle}>
            {props.value}
        </div>
    )
};
