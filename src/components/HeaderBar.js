import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function HeaderBar() {
    return (
        <Container className="nav-container">
            <Navbar bg='light' sticky="top" expand="sm">
                <Navbar.Brand href="/">RxWave QA Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/reports" className="navbar-link">Reports</Link>
                </Nav>
            </Navbar>
        </Container>

    )
}