import {fromJS} from  'immutable';

const initialState=fromJS({
    count:0,
})

function history(state=initialState,action){
    switch(action.type){
        case 'INCREMENT':
            return state.set('count',state.get('count')+1)
        case 'DECREMENT':
            return state.set('count',state.get('count')-1)  
        default:
            return state
    }
}

export default history;