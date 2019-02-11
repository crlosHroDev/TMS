import {fromJS} from 'immutable';

let user=JSON.parse(localStorage.getItem('user'))

const initialState=fromJS({
    data:{
        email:'',
        password:''
    }
})

function signIn(state=initialState,action){
    switch(action.type){
        case '':
            return state.set()
        default:
            return state
    }
}

export default signIn;