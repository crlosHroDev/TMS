import React,{Component} from 'react';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux'; 


class NavBarContainer extends Component {

    showModal=()=>{
        this.props.dispatch({
            type:'OPEN_MODAL',
        })
    }

    render(){
        return(
            <NavBar showModal={this.showModal} modalVisible={this.props.modalVisible}/>
        )
    }
}

function mapStateToProps(state,props){
    return{
        modalVisible:state.get('modal').get('modalVisible'),
        hide:state.get('modal').get('hide'),
        login:state.get('modal').get('login'),
        menuActive:state.get('modal').get('menuActive')
        }
  }
export default connect(mapStateToProps)(NavBarContainer);