import React,{Fragment,Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Map as map} from 'immutable';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
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
        applyMiddleware(logger)
    )
)
console.log(store.getState())

class App extends Component{

    render(){
        return(
            <Provider store={store}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/servicios' component={Services}/>
                        <Route exact path='/registro' component={ModalContainer}/>
                        <Route exact path='/ingreso' component={Login}/>
                        <Route exact path='/login' component={TMS}/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;

