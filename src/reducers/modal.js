import {fromJS} from 'immutable';

const initialState=fromJS({
    modalVisible:false,
    hide:false,
    login:false,
    signUpActive:true
})

function modal(state=initialState,action){
    switch(action.type){
        case 'OPEN_MODAL':
            return state.set('modalVisible',true)
        case 'CLOSE_MODAL':
            return state.set('modalVisible',false)
        case 'HIDE_PASSWORD':
            return state.set('hide',!state.get('hide'))
        case 'LOGIN':
            return state.set('login',true)
        case 'SIGN_UP':
            return state.set('login',false)
        // case 'SIGNUP_ACTIVE':
        //     return state.set('signUpActive',true)
        // case 'LOGIN_ACTIVE':
        //     return state.set('signUpActive',false)
        default:
            return state
    }
}

export default modal;