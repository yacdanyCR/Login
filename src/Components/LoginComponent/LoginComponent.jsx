import React from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

export const LoginComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Row className='justify-content-md-center' style={{ marginTop: '20vh' }} >
            <Col md={3}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register('email', {
                            required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                        {errors.email?.type === 'required' && <Alert variant='danger'>Email is required</Alert>}
                        {errors.email?.type === 'pattern' && <Alert variant='danger'>Invalidad Email</Alert>}
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
                        {errors.password?.type === 'minLength' && <Alert variant='danger'>Min 8 characters</Alert>}
                        {errors.password?.type === 'required' && <Alert variant='danger'>Password is required</Alert>}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={'/register'}> <Button variant='secondary m-2'>Create an Account</Button></Link>
                </Form>
            </Col>
        </Row>
    )
}

export default LoginComponent