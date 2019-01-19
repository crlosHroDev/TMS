import React, { Component } from "react";
import {connect} from 'react-redux';
import Modal from '../components/modal';

class ModalContainer extends Component {
  hideModal=()=>{
    this.props.dispatch({
      type:'CLOSE_MODAL'
    })
  }

  hidePassword=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch({
      type:'HIDE_PASSWORD'
    })
  }

  render() {
    return(
      <Modal hideModal={this.hideModal} hidePassword={this.hidePassword} hide={this.props.hide}/> 
    )
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modalVisible'),
    hide:state.get('modal').get('hide')
  }
}

export default connect(mapStateToProps)(ModalContainer);
