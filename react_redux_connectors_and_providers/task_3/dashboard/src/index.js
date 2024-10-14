// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App/App';
import ErrorBoundary from './utils/ErrorBoundary';
import uiReducer from './reducers/uiReducer';

// Create the Redux store with thunk middleware and DevTools support
const composeEnhancers = composeWithDevTools || compose;  // Fallback to default compose if Redux DevTools is not available

const store = createStore(
  uiReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
