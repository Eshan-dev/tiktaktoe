import React from 'react';

export const findWinner = (boxes) => {
    //array with winning combinations
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //iterate over winning combinations
    for (var i = 0; i < rows.length; i++) {
        const [a,b,c] = rows[i];
        console.log(rows[i]);
        console.log(a, b,c);
        //check if game contains winning combination
        if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
        };
    };
    return null;
};


export const areAllBoxesClicked = (boxes) => {
    //variable to store number of clicks
    let click = 0;

    //iterate over boxes
    boxes.forEach((item) => {
        //check if boxes are not null
        if (item !== null) {
            //increase value
            click++;
        }
    })

    // Check if all boxes are clicked (filled);
    if(click === 9) {
        return true;
    } else {
        return false;
    }
};