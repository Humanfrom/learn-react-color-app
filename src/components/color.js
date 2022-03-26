import React from 'react'
import StarRating from "./starRating.js"
import PropTypes from 'prop-types';

export const Color  = (props) => {
    const {title, rating, color,onRemove,onRate} = props;
    return(
      <section className='color'>
        <h1>{title}</h1>
        <button
        onClick={onRemove}>X</button>
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

export default Color;
