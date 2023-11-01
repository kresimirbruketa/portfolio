import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="lg" className="header" variant="dark">
            <Container >
                <Navbar.Brand href="/" className="logo">Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/education">Education&Experience</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;
