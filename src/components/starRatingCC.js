import Star from './star.js';

const StarRating = ({totalStars=5, starsSelected=0,onRate=f=>f}) =>
<div className="star-rating">
  {[...Array(totalStars)].map((e,i) => <Star key={i}
    selected={i<starsSelected}
    onClick={() => onRate(i+1)} />
    )
  }
  <br/>
  <p>{starsSelected} из {totalStars} звёзд</p>
</div>


export default StarRating;
