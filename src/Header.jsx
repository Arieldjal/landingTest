import React from "react";

import { Navbar, Container, Nav, Button } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //ListHere
      label: this.props.miPrimerProps,
    };
  }

  render() {
    return (
      //Return Here component or html code
      <div>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
          <Container>
            <Navbar.Brand href="#">FUNREAD</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Study Programs</Nav.Link>
                <Nav.Link href="#">Recent Reports</Nav.Link>
                <Button className="buttonLogin" variant="outline-light">
                  Log In
                </Button>
                {"  "}
                <Button variant="outline-light">Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
