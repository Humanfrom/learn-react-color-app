import data from '../../data/data.js';
import {colors, sort} from '../reducers'
import {createStore, combineReducers, applyMiddleware} from 'redux'

const logger = store => next => action => {
  let result;
  console.groupCollapsed('dispatching',action.type);
  console.log('prev state', store.getState());
  console.log('action',action);
  result = next(action);
  console.log('next state',store.getState())
  console.groupEnd()
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result;
}

const storeFactory = (initialState = data) =>
applyMiddleware(logger, saver)(createStore)(
  combineReducers({colors,sort}),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
  data
)

export default storeFactory;
