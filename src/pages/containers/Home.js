import React ,{Component} from 'react';
import HomeLayout from '../components/Home-layout';
import NavBarContainer from '../../navBar/containers/NavBar-Container';

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <NavBarContainer/>
            </HomeLayout>
            
        )
    }
}

export default Home;