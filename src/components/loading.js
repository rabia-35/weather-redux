import React from 'react'
import {Container, Spinner} from "react-bootstrap"
function Loading() {
  return (
    <Container className='text-center mt-5 fs-1'>
        <Spinner animation="border" />
    </Container>
  )
}

export default Loading