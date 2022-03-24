//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import StarRatingC from './components/starRatingCC.js';
import AddColorForm from './components/addColorForm.js';
import ColorList from './components/colorList.js';
import data from './data/data.js';
import {v4} from 'uuid'
import C from './constants';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      colors: data.colors
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title,color){
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating:0
      }
    ]
    this.setState({colors})
  }

  rateColor(id,rating){
    const colors = this.state.colors.map(
      (color,i) => (color.id === id) ? {...color,rating} : color
    );
    this.setState({colors});
  }


  removeColor(id){
    const colors = this.state.colors.filter(
      (color,i) => color.id !== id
    );
    this.setState({colors});
  }

  render(){
    const {addColor,rateColor,removeColor} = this
    const {colors} = this.state;
    return (
      <div className='app'>
        <AddColorForm onNewColor={addColor}/>
        <ColorList
          colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    );
  }
}

export default App;

//<StarRatingC totalStars={5} starsSelected={2}/>
