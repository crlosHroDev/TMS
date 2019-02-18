import modal from './modal';
import history from './history';
import errorReducer from './errorReducer';
import authReducer from './authReducer'
import {combineReducers} from 'redux-immutable';

const reducer=combineReducers({
    modal,
    history,
    errors:errorReducer,
    auth:authReducer
})

export default reducer;