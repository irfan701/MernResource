import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">CRUD</Navbar.Brand>
                    <Nav className="me-auto">

                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/create">Create</NavLink>
                        <NavLink className="nav-link" to="/update">Update</NavLink>


                    </Nav>
                </Container>
            </Navbar>
        </>


    );
};

export default AppNavBar;



