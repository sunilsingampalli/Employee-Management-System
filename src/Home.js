import React, { Component } from 'react';
import {
    Container,
    Carousel,
    Row,
    Col
}
from 'react-bootstrap';
import Header from './Header';


class Home extends Component {
    constructor(){
        super();
        this.state ={

        }
    }

    render(){
        return(
            <div>
                <Header />
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12} style={{marginTop: "5%"}}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./img/sliderimage1.jpg"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./img/sliderimage2.jpg"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./img/sliderimage3.jpg"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>    
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./img/sliderimage4.jpeg"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>   
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }

export default Home;