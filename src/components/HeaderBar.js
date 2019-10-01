import React from 'react';
import theme from '../theme';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function HeaderBar() {
    console.log(theme.colors.header);
    return (
        <Container className="nav-container" style={{backgroundColor: theme.colors.header}}>
            <Navbar sticky="top" expand="sm" style={{backgroundColor: theme.colors.header}}>
                <Navbar.Brand href="/">RxWave QA Dashboard</Navbar.Brand>
                <Nav className="mr-auto"> 
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/reports" className="navbar-link">Reports</Link>
                    <Link to="/accuracy" className="navbar-link">Accuracy</Link>
                </Nav>
            </Navbar>
        </Container>

    )
}