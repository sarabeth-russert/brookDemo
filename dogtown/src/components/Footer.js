import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Text href="#">This is the github link</Navbar.Text>
        <Navbar.Text href="#">created for Code Fellows</Navbar.Text>
        <Navbar.Text href="#">copyright 2021</Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer
