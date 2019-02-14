import React, { Component } from "react";
import {connect} from 'react-redux';
import FormContainer from '../../Forms/containers/Form';

class ModalContainer extends Component { 
  constructor(props){
    super(props)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  previousLocation=this.props.location
  componentDidMount(){
    document.addEventListener("click",this.handleClickOutside)
  }
  
  componentWillUnmount(){
    document.removeEventListener("click", this.handleClickOutside)
  }

  componentWillUpdate(nextProps){
    const {location}=this.props
    if(
      nextProps.history.action!=="POP" &&
      (!location.state || !location.state.get('modal'))
    ){
      this.previousLocation=this.props.location
    }
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.dispatch({
        type: "CLOSE_MODAL" 
      });
    }
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

      <div className="modal" ref={this.setWrapperRef}>
        <nav className='navModal'>
          <ul className='loginSignup' >
          <li className='loginmodal' style={this.props.login ? {backgroundColor:'#ffffff'}:{backgroundColor:'#d2d8d8'}}>
            <a  href="#" onClick={this.signIn}>Login</a>
          </li>
          <li className='signUp' style={this.props.login ? {backgroundColor:'#d2d8d8'}:{backgroundColor:'#ffffff'}}>
            <a href="#" onClick={this.signUp} >SignUp</a>
          </li>
          </ul>
        </nav>
      
        <FormContainer/>
      </div>

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
