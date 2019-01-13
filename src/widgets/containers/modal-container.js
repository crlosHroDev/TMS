import React, { Component } from "react";
import {connect} from 'react-redux';
import Modal from '../components/modal';

class ModalContainer extends Component {
  hideModal=()=>{
    this.props.dispatch({
      type:'CLOSE_MODAL'
    })
  }
  render() {
    return(
      <Modal hideModal={this.hideModal}/>
    )
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modalVisible')
  }
}

export default connect(mapStateToProps)(ModalContainer);
