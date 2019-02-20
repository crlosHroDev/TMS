import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt,faCaretRight,faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import App from '../../src/pages/containers/app';

library.add(faSignInAlt,faCaretRight,faCaretLeft)
const homeContainer = document.getElementById('home-container');
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        , homeContainer);
        


