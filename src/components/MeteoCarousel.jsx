// import Carousel from "react-bootstrap/Carousel";
import { Row, Col, ListGroup } from "react-bootstrap";

function MeteoCarousel(props) {
  return (
    <div className="w-75 ms-auto me-auto bg-light p-2 mt-4">
      <Row>
        <Col xs={3}>{props.dataNapoli.name}</Col>
        <Col></Col>
        <Col>{props.dataNapoli.main.temp}</Col>
        <Col>{props.dataNapoli.weather[0].main}</Col>
        <Col>{props.dataNapoli.wind.speed}</Col>
      </Row>
      <Row className=" mt-2">
        <Col xs={3}>
          <img src="https://placecats.com/100/100" alt="placeholder" />
        </Col>
        <Col xs={9}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={3}>Ore</Col>
                <Col xs={3}>Gradi</Col>
                <Col xs={3}>Pioggia</Col>
                <Col xs={3}>Vento</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default MeteoCarousel;
