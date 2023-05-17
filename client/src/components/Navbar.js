import React from 'react'
import Container  from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar(){
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Online Text-to-Image 
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Navigationbar