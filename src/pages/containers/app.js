import React,{Fragment,Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Services from './services';
import TMS from './tms';


class App extends Component{
    render(){
        return(
            <Fragment>
                <Route exact path='/' component={Home}/>
                <Route exact path='/servicios' component={Services}/>
                <Route exact path='/login' component={TMS}/>
            </Fragment>
        )
    }
}

export default App;

