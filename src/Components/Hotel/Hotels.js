import React from 'react';
import star from '../../Icon/star_1_.png'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import { hotelDetails } from './fakeHotel';
import LocationMap from '../Map/LocationMap';
import { useParams } from 'react-router-dom';
 

  
const Hotels = () => {
   const {place} = useParams();

    return (
        <Container >
            <Header fontcolor="black"></Header>
            <Row style ={{padding:"10px"}}>
                <Col>
                    {
                        hotelDetails.map(hotel =>

                            <Row style ={{padding:"10px"}}>
                                <Col>
                                    <img src={hotel.picture} width="100%"/>
                                </Col>
                                <Col>
                                    <h4>{hotel.Name}</h4>
                                    <small>{hotel.room}</small>
                                    <small>Air-condiation : {hotel.room}</small>
                                    <small>Cancellation : {hotel.cancellation}</small>
                                    <small><img src={star} /> {hotel.rating} ({hotel.total_rating})</small>
                                    <p>Price :${hotel.price} /night</p>
                                </Col>
                            </Row>
                        )

                    }

                </Col>
                <Col>
                        <LocationMap place ={place}></LocationMap>
                </Col>
            </Row>
        </Container>
    );
};

export default Hotels;