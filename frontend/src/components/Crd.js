import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ data }) => {
  return (
    <Card className='my-3 px-0 rounded' >
      <Card.Img src={data.image} variant='top' />
      <Card.Body>
        <Card.Title as='div'>
          <h6>{data.videoName}</h6>
          <p>{data.views} views</p>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Product
