import React,{Component} from 'react';
import {connect} from 'react-redux';
import Hero from '../components/hero';

class HeroCont extends Component{
    render(){
        return(
            <Hero/>
        )
    }
}

function mapStateToProps(state,props){
    return{
      modalVisible:state.get('modal').get('modalVisible'),
      count:state.get('history').get('count'),
      hide:state.get('modal').get('hide'),
      login:state.get('modal').get('login'),
      signUpActive:state.get('modal').get('signUpActive'),
      errors:state.get('errors'),
      isAuthenticated:state.get('auth').get('isAuthenticated'),
      user:state.get('auth').get('user')
    }
  }  

export default connect(mapStateToProps)(HeroCont);