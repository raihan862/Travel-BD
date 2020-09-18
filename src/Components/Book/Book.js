import React from 'react';
import backgroundImg from '../../Image/home.png';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { placeData } from '../../data';
import './Book.css'
import Header from '../Header/Header';
const Book = () => {

  const { place } = useParams();
  let newplace= placeData.filter(d=> d.id ===place)
  return (
    <div style={{ backgroundImage: `linear-gradient(rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${backgroundImg})`,color:"white" }} className="header-background">
    <Container >
      <Header fontcolor="white"></Header>
      <Row className="parent">
        <Col md={4} className="description">

          <h1>{newplace[0].Name} </h1>
          <p>{newplace[0].description}</p>

        </Col>
        <Col md={8} className="card-part">
          <Row className="card-container">
            <Form style={{ backgroundColor: "white", padding: "20px 20px", }}>
              <Form.Group controlId="formBasicStart">
                <Form.Label > Origin</Form.Label>
                <Form.Control type="text" placeholder="Starting Place" value="Dhaka" required />

              </Form.Group>

              <Form.Group controlId="formBasicDestinatiom">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" value={place} required />
              </Form.Group>

              <Form.Group >
                <Row>
                  <Col style={{ height: "20px" }}>
                    <label style={{ color: " #818181" }} for="from">From</label>
                    <input type="date" id="from"   required />
                  </Col>
                  <Col style={{ height: "80px" }} >
                    <label for="to" style={{ color: " #818181" }}>To</label> <br />
                    <input type="date" id="to" required/></Col>
                </Row>


              </Form.Group>
              <Link to ={"/hotel/"+place} >
              <Button variant="warning" type="submit" style={{ width: "100%" }}>
                 Start Boking
             </Button>
             </Link>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default Book;