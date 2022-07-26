import React from 'react'
import Footer from '../components/Footer'
import Icon from '../components/Footer/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre Nós</Footer.Title>
                    <Footer.Link href="#">História</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Serviços</Footer.Title>
                    <Footer.Link href="#">Delivery</Footer.Link>
                    <Footer.Link href="#">Ifood</Footer.Link>
                    <Footer.Link href="#">Desenvolvimento</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Entre em contato conosco</Footer.Title>
                    <Footer.Link href="#">(21) 99821-6393</Footer.Link>
                    <Footer.Link href="#">(21) 99595-6062</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}