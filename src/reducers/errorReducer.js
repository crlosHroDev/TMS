import {GET_ERRORS} from '../actions/types';
import {Map as map} from 'immutable';

const initialState=map()

export default function (state=initialState,action){
    switch(action.type){
        case GET_ERRORS:
            return action.payload
        default:
            return state
    }
}