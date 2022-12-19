import React from 'react'
import RegisterComponent from '../Components/RegisterComponent/RegisterComponent'
import { Container } from 'react-bootstrap'

export const RegisterPage = () => {
    return (
        <main>
            <section>
                <Container>
                    <RegisterComponent />
                </Container>
            </section>
        </main>
    )
}

export default RegisterPage