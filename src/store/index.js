import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {projectReducer} from './reducers/projectReducer';

const reducers = combineReducers({
  project: projectReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
