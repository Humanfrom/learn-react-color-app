import PropTypes from 'prop-types';
import createClass from "create-react-class";
import Star from './star.js';

const StarRatingC = ({totalStars=5, starsSelected=0,onRate=f=>f}) =>
<div className="star-rating">
  {[...Array(totalStars)].map((e,i) => <Star key={i}
    selected={i<starsSelected}
    onClick={() => onRate(i+1)} />
    )
  }
  <br/>
  <p>{starsSelected} звёзд из {totalStars}</p>
</div>


export default StarRatingC;
