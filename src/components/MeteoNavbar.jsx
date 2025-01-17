import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function MeteoNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">DADA METEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="w-50 ">
          <InputGroup>
            <Form.Control
              placeholder="Cerca la tua Citta!"
              aria-label="Cerca la tua Citta!"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MeteoNavbar;
