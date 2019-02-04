import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css';
import 'styles/index.css';

import App from 'components/App';

import rootReducer from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));
