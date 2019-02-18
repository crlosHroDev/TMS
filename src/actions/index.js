import axios from 'axios';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import {Map as map} from 'immutable';
import {OPEN_MODAL,CLOSE_MODAL,HIDE_PASSWORD,LOGIN,SIGN_UP,INCREMENT,DECREMENT,GET_ERRORS, SET_CURRENT_USER} from './types';


export const openModal=()=>{
    return{
        type:OPEN_MODAL
    }
}


export const registerUser=(user,history)=>dispatch=>{
    axios.post('/api/users/register',user)
        .then(res=>history.push('/login'))
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
}

export const loginUser=(user)=>dispatch=>{
    axios.post('/api/users/login',user)
        .then(res=>{
            const {token}=res.data
            localStorage.setItem('jwtToken',token)
            setAuthToken(token)
            const decoded=jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
}

export const setCurrentUser=decoded =>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}


export const logoutUser=(history)=>dispatch=>{
        localStorage.removeItem('jwtToken')
        setAuthToken(false)
        dispatch(setCurrentUser(map()))
        history.push('/login')
}