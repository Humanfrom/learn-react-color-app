//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createClass from "create-react-class";

const logColor = (title,color) => console.log(`New Color: ${title} ${color}`)

const Star = ({selected=false, onClick=f=>f}) =>
<div className={(selected) ? "star selected" : "star"} onClick={onClick}></div>

Star.propTypes = {
  selected:PropTypes.bool,
  onClick:PropTypes.func
}

class StarRating extends Component{

  constructor(props){
    super(props)
    this.state = {
      starsSelected: 0
    }
    this.change = this.change.bind(this);
  }

  static propTypes = {
    totalStars: PropTypes.number
  }

  static defaultProps = {
    totalStars: 5
  }

  change(starsSelected){
    this.setState({starsSelected});
  }

  render(){
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return (
      <div className="star-rating">
      {[...Array(totalStars)].map((n,i) =>
        <Star key={i}
        selected={i<starsSelected}
        onClick={() => this.change(i+1)}
        />
      )
    }<br/>
    <p>{starsSelected} звёзд из {totalStars}</p>
    </div>
  )
  }
}

const StarRatingCC = createClass({
  displayName:"StarRatingCC",
  getDefaultProps(){
    return{totalStars: 5}
  },
  getInitialState(){
    return{starsSelected: 0}
  },
  componentDidMount(){
    const {starsSelected} = this.props;
    if(starsSelected){
      this.setState({starsSelected})
    }
  },
  change(starsSelected){
    this.setState({starsSelected})
  },
  render(){
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return(
      <div className="StarRating">
      {[...Array(totalStars)].map((n,i) => <Star key={i} selected={i<starsSelected} onClick={() => this.change(i+1)}/>)}
      <br/>
      <p>{starsSelected} звёзд из {totalStars}</p>
      </div>
    )
  }
})


const AddColorForm = ({onNewColor=f=>f}) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value,_color.value);
    _title.value = '';
    _color.value = '#000000'
    _title.focus();
  }
  return(
    <form onSubmit={submit}>
    <input type="text" ref={input => _title = input} placeholder="color title..." required/>
    <input type="color" ref={input => _color = input} required/>
    <button>ADD</button>
    </form>
  )
}

function App() {
  return (
    <StarRatingCC totalStars={5} starsSelected={2}/>
  );
}

export default App;
