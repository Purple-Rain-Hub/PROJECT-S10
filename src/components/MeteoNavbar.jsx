import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MeteoNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Link to="/" className=" navbar-brand">
          DADA METEO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="w-50 ">
          <Link to="/search" className="nav-link">
            CERCA CITTA
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MeteoNavbar;
