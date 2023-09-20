import { Navbar, Nav, Button } from "react-bootstrap";



import React from "react";
import { Logo } from "../utils/logo";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="xxl" className="mx-5">
      <Navbar.Brand href="/">
        <Logo style={{width: "20%", height: "20%"}}
          className="d-inline-block align-top"
          alt="Prossima Art logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="left my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/HowWorksView" className="mx-4">How It Works</Nav.Link>
          
        </Nav>
        <Button href="https://wa.link/2064ef" className="mx-4 position-relative rounded-5" size="lg" variant="primary">Join Waitlist</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;