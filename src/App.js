//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import StarRatingC from './components/starRatingCC.js';
import StarRating from './components/starRating.js';
import data from './data/data.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {colors:[]};
  }

  render(){
    return (
      <StarRatingC totalStars={5} starsSelected={2}/>
    );
  }
}

export default App;
