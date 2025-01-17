import Carousel from "react-bootstrap/Carousel";
import { Row, Col, ListGroup } from "react-bootstrap";
function MeteoCarousel(props) {
  return (
    <Carousel className="w-75 ms-auto me-auto ">
      <Carousel.Item className="bg-light p-2 mt-4">
        <Row className=" align-items-center">
          <Col xs={3}>
            <h2>{props.dataNapoli.name}</h2>
          </Col>
          <Col>TEMPO ORA:</Col>
          <Col>{Math.floor(props.dataNapoli.main.temp - 273.15)}°C</Col>
          <Col>{props.dataNapoli.weather[0].main}</Col>
          <Col>Vento: {props.dataNapoli.wind.speed}m/s</Col>
        </Row>
        <Row className=" mt-4">
          <Col xs={3}>
            <img src="https://placecats.com/100/100" alt="placeholder" />
          </Col>
          <Col xs={9}>
            <ListGroup>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataNapoliForecast.list[0].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataNapoliForecast.list[0].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataNapoliForecast.list[0].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataNapoliForecast.list[0].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataNapoliForecast.list[1].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataNapoliForecast.list[1].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataNapoliForecast.list[1].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataNapoliForecast.list[1].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataNapoliForecast.list[2].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataNapoliForecast.list[2].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataNapoliForecast.list[2].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataNapoliForecast.list[2].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className="bg-light p-2 mt-4">
        <Row className=" align-items-center">
          <Col xs={3}>
            <h2>{props.dataRoma.name}</h2>
          </Col>
          <Col>TEMPO ORA:</Col>
          <Col>{Math.floor(props.dataRoma.main.temp - 273.15)}°C</Col>
          <Col>{props.dataRoma.weather[0].main}</Col>
          <Col>Vento: {props.dataRoma.wind.speed}m/s</Col>
        </Row>
        <Row className=" mt-4">
          <Col xs={3}>
            <img src="https://placecats.com/100/100" alt="placeholder" />
          </Col>
          <Col xs={9}>
            <ListGroup>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataRomaForecast.list[0].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataRomaForecast.list[0].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia: {props.dataRomaForecast.list[0].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataRomaForecast.list[0].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataRomaForecast.list[1].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataRomaForecast.list[1].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia: {props.dataRomaForecast.list[1].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataRomaForecast.list[1].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataRomaForecast.list[2].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataRomaForecast.list[2].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia: {props.dataRomaForecast.list[2].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataRomaForecast.list[2].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className="bg-light p-2 mt-4">
        <Row className=" align-items-center">
          <Col xs={3}>
            <h2>{props.dataMilano.name}</h2>
          </Col>
          <Col>TEMPO ORA:</Col>
          <Col>{Math.floor(props.dataMilano.main.temp - 273.15)}°C</Col>
          <Col>{props.dataMilano.weather[0].main}</Col>
          <Col>Vento: {props.dataMilano.wind.speed}m/s</Col>
        </Row>
        <Row className=" mt-4">
          <Col xs={3}>
            <img src="https://placecats.com/100/100" alt="placeholder" />
          </Col>
          <Col xs={9}>
            <ListGroup>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataMilanoForecast.list[0].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataMilanoForecast.list[0].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataMilanoForecast.list[0].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataMilanoForecast.list[0].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataMilanoForecast.list[1].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataMilanoForecast.list[1].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataMilanoForecast.list[1].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataMilanoForecast.list[1].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>
                    Data: {props.dataMilanoForecast.list[2].dt_txt}
                  </Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(
                      props.dataMilanoForecast.list[2].main.temp - 273.15
                    )}
                    °C
                  </Col>
                  <Col xs={3}>
                    Probabilità di pioggia:{" "}
                    {props.dataMilanoForecast.list[2].pop}
                  </Col>
                  <Col xs={3}>
                    Vento: {props.dataMilanoForecast.list[2].wind.speed}m/s
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default MeteoCarousel;
