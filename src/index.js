import React,{ Component }  from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/index'
import { get, post } from './request/http';
import api from './request/api';


Component.prototype.get = get;
Component.prototype.post = post;
Component.prototype.api = api;
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />,
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
