import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/main.scss';

const appViewElement = document.getElementById('app-view');
ReactDOM.render(<App />, appViewElement);
