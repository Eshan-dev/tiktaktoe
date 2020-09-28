import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

//import score and board
import Board from './components/board';
import Score from './components/scoreboard'

class App extends Component {
  render() {
  return (
     <div className="app">
       <BrowserRouter>
        <Route exact path="/" component={Score}/> 
        <Route exact path="/board" component={Board}/> 
       </BrowserRouter>
     </div> 

  )};
}

export default App;
