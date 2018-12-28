import React,{Fragment} from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../../src/pages/containers/home';
import Services from '../../src/pages/containers/services';

const homeContainer = document.getElementById('home-container');

render(
<BrowserRouter>
<Fragment>
    <Route exact path='/' component={Home}/>
    <Route exact path='/servicios' component={Services}/>
</Fragment>
</BrowserRouter>
, homeContainer);

