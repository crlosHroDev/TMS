import modal from './modal';
import history from './history';
import authentication from './Authentication';
import {combineReducers} from 'redux-immutable';

const reducer=combineReducers({
    modal,
    history,
    authentication
})

export default reducer;