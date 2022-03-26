import PropTypes from 'prop-types';
import AddColorForm from './addColorForm'
import SortMenu from './SortMenu'
import ColorList from './colorList'
import { addColor, sortColors, rateColor, removeColor } from './actions'
import { sortFunction } from '../lib/array-helpers'
import { useSelector, useDispatch } from 'react-redux'

export const NewColor = (props) => {
  const dispatch = useDispatch()
  return (
    <AddColorForm onNewColor={(title,color) =>
      dispatch(
        addColor(title,color)
      )}/>
  );
}

export const Menu =  (props) => {
  const stateSort = useSelector(state => state.sort)
  const dispatch = useDispatch()
  return (
    <SortMenu
    sort={stateSort}
    onSelect={sortBy =>
      dispatch(sortColors(sortBy))
    }/>
  );
}

export const Colors =  (props)  => {
  const {colors, sort} = useSelector(state => state)
  const dispatch = useDispatch()
  const sortedColors = [...colors].sort(sortFunction(sort))
  return (
    <ColorList
    colors={sortedColors}
      onRemove={
        id => dispatch(removeColor(id))
      }
      onRate={
        (id,rating) => dispatch(rateColor(id,rating))
      }
      />
  );
}
