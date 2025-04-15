import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { Strong } from "react-bootstrap-icons";  

const Header = ()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/"><Strong>Employe Management System</Strong></Navbar.Brand>
                <Nav >
                    <Nav.Link as={Link} to="/" className="nav-link">Employees</Nav.Link>
                    <Nav.Link as={Link} to="/employee" className="nav-link">Add Employee</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
    );
}
export default Header;