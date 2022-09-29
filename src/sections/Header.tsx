import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        color="primary"
        className="px-2 px-sm-5"
      >
        <Container fluid>
          <Navbar.Brand href="#root" className="fs-1 p-0 fw-bolder me-5">
            <span className="light-blue">Dev</span>
            <span className="dark-blue">Fast</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Collapse
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbar-expand"
          >
            <Nav
              className="justify-content-start flex-grow-1 fs-3 text-dark text-opacity-50"
              navbar
            >
              <NavDropdown title="Trilha React" id="basic-nav-dropdown">
                <NavDropdown.Item href="#curso1">
                  1# Lógica Programação
                </NavDropdown.Item>
                <NavDropdown.Item href="#curso2">
                  2# Web Moderno
                </NavDropdown.Item>
                <NavDropdown.Item href="#curso3">
                  3# ReactJs + Redux
                </NavDropdown.Item>
                <NavDropdown.Item href="#curso4">
                  4# React Native
                </NavDropdown.Item>
                <NavDropdown.Item href="#curso5">5# NodeJs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#extras">Extras</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#group">Quem somos?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
