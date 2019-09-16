import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';

ReactDOM.render(
    <Provider store={store}>
        <HeaderBar />
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Home} />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
