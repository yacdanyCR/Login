import React from 'react'
import LoginComponent from '../Components/LoginComponent/LoginComponent'
import { Container } from 'react-bootstrap'

export const IndexPage = () => {
    return (
        <main>
            <section>
                <Container>
                    <LoginComponent />
                </Container>
            </section>
        </main>
    )
}

export default IndexPage