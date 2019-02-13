import modal from './modal';
import history from './history';
import {combineReducers} from 'redux-immutable';

const reducer=combineReducers({
    modal,
    history
})

export default reducer;