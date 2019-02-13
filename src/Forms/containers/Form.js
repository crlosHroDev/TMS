import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import Register from './Register';
import FormSignIn from '../components/FormSignIn';

class FormContainer extends Component {
    constructor(props){
        super(props)
    }

    hidePassword=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        this.props.dispatch({
          type:'HIDE_PASSWORD'
        })
      }

      handleSubmit=(e)=>{
          e.preventDefault()

          this
      }
    
    render(){
        return(
            <Fragment>
                {
                    !this.props.login &&
                    <Register
                        hide={this.props.hide}
                        hidePassword={this.hidePassword}
                    />
                }          
                {
                    this.props.login &&
                    <FormSignIn
                        hide={this.props.hide}
                        hidePassword={this.hidePassword}
                    />
                }
            </Fragment>
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
  
export default connect(mapStateToProps)(FormContainer);