import React, {Component} from 'react';
import {Storage} from '../storage/storage';
import {Link} from 'react-router-dom';

class ScoreBoard extends Component{
    state = {
        scoreBoard = []
    }

    //after component mounts, load any data from storage and update component state
    async componentDidMount() {
        let storage = await new Storage().getData();
        this.setState({
            scoreBoard = storage
        })
    };

    render() {
        return(
         <div className="game">
             <h1>Recent games:</h1>
             <ul>
                 {this.state.scoreBoard.map((leader, key) => {
                     return <li key={key}>{leader}</li>
                 })}
             </ul>

             {/*start new game*/}
             <Link to="/board">
                 <button className="btn">Start new game</button>
             </Link>
         </div>   
        )
    }
}

export default ScoreBoard;