import {userConstants} from './constants/usersConstants';
import {alertActions} from './alertActions';

export const userActions={
    login,
    logout,
    register,
    getAll,
    delete:_delete
}

function login(username,password){
    return dispatch=>{
        dispatch(request({username}))
    }
}