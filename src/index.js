import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { persistor, store } from './store/store';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

  ,
  document.getElementById('root')
);
