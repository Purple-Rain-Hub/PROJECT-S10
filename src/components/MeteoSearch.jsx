import { useState } from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";

function MeteoSearch() {
  const [search, setSearch] = useState();

  const getSearch = async (city) => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let data = await response.json();
        setSearch(data.list);
      } else throw new Error("errore nella fetch di ricerca");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-75 ms-auto me-auto">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getSearch(e.target[0].value);
        }}
      >
        <Form.Control
          placeholder="Cerca la tua Citta!"
          aria-label="Cerca la tua Citta!"
          aria-describedby="basic-addon1"
          className="w-75 d-inline-block"
        />
        <button type="submit" className=" d-inline-block">
          CERCA
        </button>
      </Form>
      <div>
        {search && (
          <ListGroup>
            {search.map((d) => {
              <ListGroup.Item>
                <Row className="align-content-center">
                  <Col xs={3}>Data: {d.dt_txt}</Col>
                  <Col xs={3}>
                    Temperatura:
                    {Math.floor(d.main.temp - 273.15)}
                    °C
                  </Col>
                  <Col xs={3}>Probabilità di pioggia: {d.pop}</Col>
                  <Col xs={3}>Vento: {d.wind.speed}m/s</Col>
                </Row>
              </ListGroup.Item>;
            })}
          </ListGroup>
        )}
      </div>
    </div>
  );
}

export default MeteoSearch;
