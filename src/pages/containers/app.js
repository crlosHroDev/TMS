import React,{Fragment,Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Map as map} from 'immutable';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Home from './home.js';
import Services from './services.js';
import ModalContainer from '../../widgets/containers/modal-container';
import Login from '../../Forms/containers/LogIn';
import TMS from './tms.js';
import NavBarContainer from '../../navBar/containers/NavBarContainer';
import reducer from '../../reducers/index';

const store=createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

class App extends Component{

    previousLocation=this.props.location
    
    // componentWillUpdate(nextProps){
    //     const {location}=this.props

    //     if(
    //         nextProps.history.action !=="POP" &&
    //         (!location.state || !location.state.modal)
    //     ){
    //         this.previousLocation=this.props.location
    //     }
    // }
    render(){
        // const {location} =this.props
        // const isModal=!!(
        //     location.state &&
        //     location.state.modal &&
        //     this.previousLocation !==location
        // )
        return(
            <Provider store={store}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch > 
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/servicios' component={Services}/>
                        <Route exact path='/registro' component={Home}/>
                        <Route exact path='/ingreso' component={Home}/>
                        <Route exact path='/login' component={TMS}/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;

