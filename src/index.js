import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import {ReportContextProvider} from './context/ReportContextProvider';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import Reports from './views/Reports';
import Accuracy from './views/Accuracy';

ReactDOM.render(
    <ReportContextProvider>
        <Router>
            <HeaderBar />
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Reports} />
            <Route path="/accuracy" component={Accuracy} />
        </Router>
    </ReportContextProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
