import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import storage object
import {Storage} from '../storage/storage';
//import box component
import {Box} from '../components/box';
//import utility functions
import {findWinner, areAllBoxesClicked} from '../utils/functions';
import '../styles/board.css'

class Board extends Component{

    state = {
        boxes: Array(9).fill(null),
        history: [],
        isNext: true
    }

    // Create instance of Storage object
    storage = new Storage()
    //instance of storage object
    handleBoxClick = (index) => {
        console.log(this.state.boxes);
        //get current state of boxes
        const boxes = this.state.boxes.slice();

        //current state of history
        let history = this.state.history;

        //stop the game if won
        if (findWinner(boxes) || boxes[index]) {
            return;
        };


        if (areAllBoxesClicked(boxes) === true) {
            return;
        };
        
        //mark box as 'X' or 'O'
        boxes[index] = this.state.isNext ? 'X' : 'O';

        //add more to game history
        history.push(this.state.isNext ? 'X' : 'O');

        //update component state with new data
        this.setState({
            boxes: boxes,
            history: history,
            isNext: !this.state.isNext
        });
    };// handleBoxClick

    //board reset
    resetBoard = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            isNext: true
        });
    };//resetBoard

    render() {

        //get winner
        const winner = findWinner(this.state.boxes);
        //are all boxes checked?
        const isFilled = areAllBoxesClicked(this.state.boxes);
        //status
        let status;

        if (winner) {
            status = `The winner is ${winner}`;
        } else if (!winner && isFilled) {
            status = 'Draw';
            this.storage.update(['Draw']);
        } else  {
            status = `${(this.state.isNext? 'X' : 'O')}'s turn`
        };

        return(
            <div className="game-wrapper">
                {/*link to scoreboard*/}
                <div className="board-link" >
                    <Link to="/">Go to scoreboard</Link>
                </div>

                {/*Game board*/}
                <div className="board-wrapper">

                    <div className="board">
                        <h2 className="board-heading">{status}</h2>
                        <div className="board-row">
                            <Box value={this.state.boxes[0]} onClick={()=> this.handleBoxClick(0)}></Box>
                            <Box value={this.state.boxes[1]} onClick={()=> this.handleBoxClick(1)}></Box>
                            <Box value={this.state.boxes[2]} onClick={()=> this.handleBoxClick(2)}></Box>
                        </div>
                        <div className="board-row">
                            <Box value={this.state.boxes[3]} onClick={()=> this.handleBoxClick(3)}></Box>
                            <Box value={this.state.boxes[4]} onClick={()=> this.handleBoxClick(4)}></Box>
                            <Box value={this.state.boxes[5]} onClick={()=> this.handleBoxClick(5)}></Box>
                        </div>
                        <div className="board-row">
                            <Box value={this.state.boxes[6]} onClick={()=> this.handleBoxClick(6)}></Box>
                            <Box value={this.state.boxes[7]} onClick={()=> this.handleBoxClick(7)}></Box>
                            <Box value={this.state.boxes[8]} onClick={()=> this.handleBoxClick(8)}></Box>
                        </div>
                    </div>

                    <div className="board-history">
                        <h2 className="board-heading">Moves history:</h2>
                        {/*history of moves*/}
                        <ul className="board-historyList">
                            {this.state.history.length === 0 && <span>No moves to show.</span>}
                            {this.state.history.length !== 0 && this.state.history.map((move, index) => {
                                return <li key={index}>Move {index+1}: <strong>{move}</strong></li>
                            })}
                        </ul>
                    </div>

                    {/*start new game button*/}
                    {winner && <div className="board-footer">
                        <button className="btn" onClick={this.resetBoard}>Start new game</button>
                    </div>}
                </div>
            </div>
        )
    }
};

export default Board;