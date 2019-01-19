import React,{Component} from 'react';
import {connect} from 'react-redux';

class Password extends Component{

    render(){
        return(
            <div>
                <label className=' image-replace cd-password'htmlFor='signup-password'>Password</label>
                <input className='password' type='password' placeholder='Contraseña' id='signup-password'></input>
                <a href="#0" className='hidePassword' onClick={this.props.hidePassword}>Ocultar</a>
            </div>
        )
    }
}

export default Password;
