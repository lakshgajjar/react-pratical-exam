import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href="#" className="logo">
          Student Record App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#students">Students</Nav.Link>
            <Nav.Link href="#form">Add Student</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;