import React,{Fragment,Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Map as map} from 'immutable';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import Home from './home';
import Services from './services';
import TMS from './tms';
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
                    <Route exact path='/login' component={TMS}/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;

