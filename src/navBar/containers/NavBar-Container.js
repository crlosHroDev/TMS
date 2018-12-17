import React,{Component} from 'react';
import NavBar from '../components/NavBar';

class NavBarContainer extends Component{

    state={
        hover:false,
    }

    handleSubNav =(event)=>{
        
    }
    
    render(){
        return(
            <NavBar/>
        )
    }
}

export default NavBarContainer;