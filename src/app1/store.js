import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {  combineEpics, createEpicMiddleware } from 'redux-observable';

const combineEpic = combineEpics();
const epicMiddleware = createEpicMiddleware();
const reducer = combineReducers({

});

const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(combineEpic);

export default store;