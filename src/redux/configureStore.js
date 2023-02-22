import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
