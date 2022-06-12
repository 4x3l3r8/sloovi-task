import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from "./redux/CreateStore";
import { Provider } from "react-redux";
import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
import './custom.scss';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

