import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

render(<React.Fragment><App /></React.Fragment>,document.getElementById('root'));
serviceWorker.unregister();
