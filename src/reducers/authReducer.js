import {fromJS} from 'immutable';
import {SET_CURRENT_USER,REMOVE_CURRENT_USER} from '../actions/types';
import isEmpty from '../server/validation/isEmpty';

const initialState=fromJS({
    isAuthenticated:false,
    user:{}
})

function authReducer(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return state.set('isAuthenticated',!isEmpty(action.payload)).set('user',action.payload)
        case REMOVE_CURRENT_USER:
            return state.set('isAuthenticated',false).set('user',action.payload)
        default:
            return state
    }
}

export default authReducer;