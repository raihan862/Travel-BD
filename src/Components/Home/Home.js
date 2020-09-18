import React, { useState } from 'react';
import backgroundImg from '../../Image/home.png';
import Header from '../Header/Header';
import './home.css';
import rec from '../../Image/Rectangle1.png';
import Sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { placeData } from '../../data';
const Home = () => {
  // const [slide, setSlide] = useState({
  //   frist: true,
  //   second: false,
  //   thirs: false
  // })
  // let i = 0; 

  // setInterval( async () => {
  // await somename(i);
  //  i++;
  //   if (i >= 4) {
  //     i = 0
  //   }
  // }, 5000)

  // const somename = id => {
  //   switch (id) {
  //     case 1:
  //       {
  //         const obj = {
  //           frist: true,
  //           second: false,
  //           thirs: false
  //         }
  //         setSlide(obj);
  //         break;
  //       }
  //     case 2:
  //       {
  //         const obj = {
  //           frist: false,
  //           second: true,
  //           thirs: false
  //         }
  //         setSlide(obj);
  //         break;
  //       }
  //     case 4:
  //       console.log(3);
  //       {
  //         const obj = {
  //           frist: false,
  //           second: false,
  //           thirs: true
  //         }
  //         setSlide(obj);
  //         break;
  //       }
  //     default:
  //       break;
  //   }
  // }

  return (
    <div style={{ backgroundImage: `linear-gradient(rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${backgroundImg})`,color:"white" }} className="header-background">
      
      <Container style={{ color: "white" }}>

      <Header fontcolor="white"></Header>
        <Row className="parent">
          <Col md={4} className="description">

            <h1> {placeData[0].Name}</h1>
            <p>{placeData[0].description.slice(0, 200)}</p>
            <Link to="/book/cox-bazar">
              <Button variant="warning" style={{ padding: "3px 20px" }} >Book <span style={{ color: "black" }}>&rarr;</span> </Button>
            </Link>
          </Col>
          <Col md={8} className="card-part">
            <Row className="card-container">
              <Link to='/book/cox-bazar'>
                <Col className="active" style={{ backgroundImage: `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%),url(${rec})` }} >
                  <h4>Cox`s Bazar</h4> </Col></Link>
              <Link to="/book/sreemongol">
                <Col style={{ backgroundImage: `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%),url(${Sreemongol})` }} >
                  <h4>Sreemongol</h4>
                </Col>
              </Link>
              <Link to="/book/sundharban">
                <Col style={{ backgroundImage: `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%),url(${sundorbon})` }} ><h4>SUNDHARBAN </h4></Col>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;