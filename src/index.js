import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './assets/sass/index.scss';
import {ReportContextProvider} from './context/ReportContextProvider';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import Reports from './views/Reports';
import Accuracy from './views/Accuracy';
import TestView from './views/TestView';

ReactDOM.render(
    <ReportContextProvider>
        <Router>
            <HeaderBar />
            <Route path="/" exact component={TestView} />
            <Route path="/reports" component={Reports} />
            <Route path="/accuracy" component={Accuracy} />
            <Route path="/dashboard" exact component={Home} />
        </Router>
    </ReportContextProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
