import React from "react";
import { Form, Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="main">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light"  >
        <Container fluid>
          <Navbar.Brand href="#home">
            <NavLink to="/">
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              height="26"
              alt=""
            />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            variant="light"
          />
          <Navbar.Collapse id="responsive-navbar-nav" variant="light">
            <Nav className="me-auto">
              <NavLink  to="/" className="mx-2"  style={{color:"black"}}>Home</NavLink>
              <NavLink to="/component/women" className="mx-2" style={{color:"black"}}>Women</NavLink>
              <NavLink to="/component/men" className="mx-2" style={{color:"black"}}>Men</NavLink>
              <NavLink to="/component/kids" className="mx-2" style={{color:"black"}}>Kids</NavLink>
              <NavLink to="/component/jewellery" className="mx-2" style={{color:"black"}}>Jewellery</NavLink>
            </Nav>
            <Nav className="me-auto" style={{ marginLeft: "15rem" }}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className="me-2">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav className="me-auto">
              <Form className="d-flex">
               <Link to="/login"><Button variant="primary" className="me-2">
                  Login
                </Button></Link>
                <Button variant="primary" className="me-2">
                  Become a Seller
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
