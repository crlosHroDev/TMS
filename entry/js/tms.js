import React from 'react';
import {render} from 'react-dom';
import TMS from '../../src/tmsPortal/pages/containers/TMS-Container'

const tmsContainer = document.getElementById('tms-container');

render(<TMS/>, tmsContainer);