import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
Form,
Button,
Container,
Row,
Col,

}
from 'react-bootstrap';
import Header from './Header';

class Login extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header />
                 <Container>
                    <Row>
                    <Col lg={3} md={3} sm={3} />
                    <Col lg={6} md={6} sm={6} xs={12} mdOffSet={3} style={{marginTop: "10%"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to ="/signup">
                        <p>New User</p>
                        </Link>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Login;