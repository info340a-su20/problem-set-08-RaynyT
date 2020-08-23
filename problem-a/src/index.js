import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!

import {App} from './App.js';
import senatorsData from './senators.json'
ReactDOM.render(<App senators=senatorsData />, document.getElementById('root'));