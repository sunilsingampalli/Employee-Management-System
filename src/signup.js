import React, { Component } from 'react';

import {
    Form,
    Button,
    Container,
    Row,
    Col

}
from 'react-bootstrap';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            form:{
                fname:"",
                lname:"",
                email:"",
                mobile:"",
                designation:"",
                username:"",
                password:""

            }

        }
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    handleChange(){
        console.log(this.state.form)
    }
    onSubmit(){
        console.log(this.state.form)

    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                <Col lg={3} md={3} sm={3} />
                <Col lg={6} md={6} sm={6} xs={12} mdOffSet={3} style={{marginTop: "5%"}}>
                <Form>
                    <Row>
                <Col md={6} sm={6} xs={12}>

                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fname" onChange={this.handleChange} onBlur={this.handleChange} />
                    </Form.Group>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lname" onChange={this.handleChange} onBlur={this.handleChange}/>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12} xs={12}>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                      
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" name="mobile" onChange={this.handleChange} onBlur={this.handleChange}/>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Designation</Form.Label>
                        <Form.Control as="select" name="designation" onChange={this.handleChange} onBlur={this.handleChange}>
                        <option>Full Stack</option>
                        <option>Android</option>
                        <option>BlockChain</option>
                        <option>Intern</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="username" onChange={this.handleChange} onBlur={this.handleChange}/>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
  
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} onBlur={this.handleChange} />
                    </Form.Group>
                    </Col>
                    </Row>

                  
                    <Button variant="primary" type="submit" onSubmit={this.onSubmit}>
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

export default Signup;