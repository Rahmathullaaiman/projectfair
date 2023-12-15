import React from 'react'
import Header from '../components/Header'
import{Row,Col}from "react-bootstrap"
import Wcard from '../components/Procard'

function Project() {
  return (
    <>
    <Header/>
    <div style={{marginTop:"150px"}} className='text-center'>
      <h1>All Project</h1>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='d-flex w-25'>
          <input type="text" className='form-control' placeholder='Search using Technologies' />
          <i class="fa-solid fa-magnifying-glass fa-2x" style={{marginLeft:"-40px",marginTop:"10px"}}></i>

        </div>

      </div>
    </div>
    <Row className='mt-5 container-fluid'>
      <Col sm={12} md={6} lg={4}>
        <Wcard/>

      </Col>

    </Row>
    </>
  )
}

export default Project