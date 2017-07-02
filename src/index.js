import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import shop from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(shop);
const ProvidedApp = <Provider store={store}>
  <App />
</Provider>

ReactDOM.render(
  <BrowserRouter>
    {ProvidedApp}
  </BrowserRouter>, document.getElementById('root')
);

registerServiceWorker();
