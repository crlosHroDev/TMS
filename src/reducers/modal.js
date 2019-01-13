import {fromJS} from 'immutable';

const initialState=fromJS({
    modalVisible:false,
})

function modal(state=initialState,action){
    switch(action.type){
        case 'OPEN_MODAL':
            return state.set('modalVisible',true)
        case 'CLOSE_MODAL':
            return state.set('modalVisible',false)
        default:
            return state
    }
}

export default modal;