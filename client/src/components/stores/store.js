import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/reducer';

//combineReducers is used to pass multiple reducers as one reducer
//it is not necessary for our one userReducer, but it is useful later 

export default combineReducers({
    userReducer,

});
