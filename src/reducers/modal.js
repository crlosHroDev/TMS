import {fromJS} from 'immutable';

const initialState=fromJS({
    modalVisible:false,
    hide:false,
})

function modal(state=initialState,action){
    switch(action.type){
        case 'OPEN_MODAL':
            return state.set('modalVisible',true)
        case 'CLOSE_MODAL':
            return state.set('modalVisible',false)
        case 'HIDE_PASSWORD':
            return state.set('hide',!state.get('hide'))
        default:
            return state
    }
}

export default modal;