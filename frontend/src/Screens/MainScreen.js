import React from 'react'
import { Row, Col } from 'react-bootstrap'
import datas from '../datas'
import Crd from '../components/Crd.js'

const MainScreen = () => {
  return (
    <>
      <Row>
        {datas.map((data) => (
          <Col key={data._id} xl={2} className='px-1'>
            <Crd data={data} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default MainScreen
