import Color from './color.js';
import {sortFunction} from '../lib/array-helpers.js'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { addColor, sortColors, rateColor, removeColor } from './actions'

const ColorList = ({colors = [],onRate=f=>f,onRemove=f=>f}) => {
  return (
    <div className="color-list">
    {(colors.length === 0) ?
      <p>No Colors in data</p> :
      colors.map(color => <Color
        key={color.id}
        {...color}
        onRate={(rating) => onRate(color.id,rating)}
        onRemove={() => onRemove(color.id)}
        />)
    }
  </div>
  )
}

export default ColorList;
