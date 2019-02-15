import modal from './modal';
import history from './history';
import errorReducer from './errorReducer';
import {combineReducers} from 'redux-immutable';

const reducer=combineReducers({
    modal,
    history,
    errors:errorReducer
})

export default reducer;