import C from '../../constants'
import { v4 } from 'uuid'

export const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
})

export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
})

export const sortColors = sortBy =>
    ({
        type: "SORT_COLORS",
        sortBy
    })


export const addColor = (color,title) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
})
