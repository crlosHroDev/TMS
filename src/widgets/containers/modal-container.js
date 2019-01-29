import React, { Component } from "react";
import {connect} from 'react-redux';
import Modal from '../components/modal';

class ModalContainer extends Component {
  // hideModal=(e)=>{
  //   let targetElement=e.target
  //   if(targetElement)
  // }

  hidePassword=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch({
      type:'HIDE_PASSWORD'
    })
  }

  signIn=()=>{
    this.props.dispatch({
      type:'LOGIN'
    })
  }

  signUp=()=>{
    this.props.dispatch({
      type:'SIGN_UP'
    })
  }

  render() {
    return(
      <Modal 
      hideModal={this.hideModal} 
      hidePassword={this.hidePassword} 
      hide={this.props.hide} 
      login={this.props.login}
      signIn={this.signIn} 
      signUp={this.signUp}
      /> 
    )
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modal').get('modalVisible'),
    hide:state.get('modal').get('hide'),
    login:state.get('modal').get('login'),
    signUpActive:state.get('modal').get('signUpActive')
  }
}

export default connect(mapStateToProps)(ModalContainer);
