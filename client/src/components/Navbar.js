import React from 'react'
import Container  from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar(){
  return (
    <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            AI IMAGE GENERATOR
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Navigationbar