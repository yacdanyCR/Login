import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const RegisterComponent = () => {
    return (
        <Row className='justify-content-md-center' style={{ marginTop: '20vh' }}>
            <Col md={3}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to={'/'}><Button variant='success m-2'>Login</Button></Link>
            </Col>
        </Row>
    )
}

export default RegisterComponent