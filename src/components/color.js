import React, {Component} from 'react'
import StarRating from "./starRatingCC.js"
import PropTypes from 'prop-types';

class Color extends Component {

  constructor(props){
    super(props);
    this.style = {background: '#CCC'}
    this.refTitle = React.createRef();
  }

  shouldComponentUpdate(nextProps){
    const {rating, title} = this.props;
    this.style = {background: '#FFF'}
    return rating !== nextProps.rating
  }

  componentDidUpdate(prevProps){
    const {title, rating} = this.props;
    const status = (rating > prevProps.rating) ? 'лучше' : 'хуже';
    console.log(`${title} стал ${status}`)
  }

  render() {
    const {title, rating, color, onRate, onRemove} = this.props;
    return(
      <section className='color' style={this.style}>
        <h1 ref={this.refTitle}>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div
          className='color'
          style={{background: color}}
          >
        </div>
        <div>
          <StarRating
            starsSelected={rating}
            onRate={onRate}
          />
        </div>
      </section>
    )
  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
}

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: '#000000',
  onRate: f=>f,
  onRemove: f=>f
}

export default Color;
