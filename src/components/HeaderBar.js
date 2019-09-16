import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function HeaderBar() {
    return (
        <Navbar bg='light' sticky="top">
            <Navbar.Brand href="/">RxWave Test UI</Navbar.Brand>
            <Nav className="mr-auto">
                <Router>
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/reports" className="navbar-link">Reports</Link>
                </Router>
            </Nav>
        </Navbar>
    )
}