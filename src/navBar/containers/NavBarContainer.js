import React,{Component} from 'react';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux'; 
import actions  from '../../actions/index';


class NavBarContainer extends Component {
    showModal=()=>{
        this.props.dispatch({
            type:'OPEN_MODAL',
        })
    }
    render(){
        return(
            <NavBar showModal={this.showModal}/>
        )
    }
}

function mapStateToProps(state,props){
    return{
      modalVisible:state.get('modalVisible')
    }
  }
export default connect(mapStateToProps)(NavBarContainer);