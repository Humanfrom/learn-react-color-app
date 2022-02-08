//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  static propTypes = {
    onNewColor: PropTypes.func
  }

  static defaultProps = {
    onNewColor: f=>f
  }

  submit(e) {
    const {_title, _color} = this.refs;
    e.preventDefault();
    this.props.onNewColor(_title.value,_color.value);
    //alert(`New Color: ${_title.value} ${_color.value}`);
    _title.value = '';
    _color.value = '#000000'
    _title.focus();
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <input type="text" ref="_title" placeholder="color title..." required/>
        <input type="color" ref="_color" required/>
        <button>ADD</button>
      </form>
    )
  }
}

const logColor = (title,color) => console.log(`New Color: ${title} ${color}`)

function App() {
  return (
    <AddColorForm onNewColor={logColor}/>
  );
}

export default App;
