import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../src/pages/containers/app';

const homeContainer = document.getElementById('home-container');
if(typeof window !=='undefined'){
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        , homeContainer);
        
}

