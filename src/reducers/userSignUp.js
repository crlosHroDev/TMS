import {fromJS} from 'immutable';


const initialState=fromJS({
    userSignUp:{
        username:'',
        email:'',
        password:'',
        password_confirm:'',
        errors:{}
    }
})

function userSignUp(state=initialState,action){
    switch(action.type){
        
    }
}

export default userSignUp;
