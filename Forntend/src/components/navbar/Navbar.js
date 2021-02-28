import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar=()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark" style={{color:'black'}}>
            <Navbar.Brand href="#home">STARZPLUS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">MOVIES</Nav.Link>
                    <Nav.Link href="#link">TV SHOW</Nav.Link>
                    <Nav.Link href="#link">ARABIC</Nav.Link>
                    <Nav.Link href="#link">KIDS</Nav.Link>
                    <NavDropdown title="CHANNELS" id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1" class="fas fa-crown">DISCOVERY+</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">UFC</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar;
