import React,{Component} from 'react';
import propTypes from 'prop-types';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux'; 
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/index';

class NavBarContainer extends Component {

    onLogout=(e)=>{
        e.preventDefault()
        this.props.actions.logoutUser(this.props.history)
    }
    showModal=()=>{
        this.props.actions.openModal()
    }

    render(){
        return(
            <NavBar
             showModal={this.showModal} 
             modalVisible={this.props.modalVisible} 
             onLogout={this.onLogout} 
             isAuthenticated={this.props.isAuthenticated}
             user={this.props.user}
             />
        )
    }
}


function mapStateToProps(state,props){
    return{
      modalVisible:state.get('modal').get('modalVisible'),
      hide:state.get('modal').get('hide'),
      login:state.get('modal').get('login'),
      signUpActive:state.get('modal').get('signUpActive'),
      errors:state.get('errors'),
      isAuthenticated:state.get('auth').get('isAuthenticated'),
      user:state.get('auth').get('user')
    }
  }  
 
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NavBarContainer));