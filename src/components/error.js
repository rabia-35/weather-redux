import React from 'react'
import {Container} from "react-bootstrap"

function Error({ err }) {
  return (
    <Container className='text-center fs-4 error'>{err}</Container>
  )
}

export default Error