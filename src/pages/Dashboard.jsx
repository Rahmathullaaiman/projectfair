import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Myproject from '../components/Myproject'
import Profile from '../components/Profile'
import { Row,Col } from 'react-bootstrap'

function Dashboard() {
  const[usernames,Setusernames] = useState('')
  useEffect(()=>{
    Setusernames(JSON.parse(sessionStorage.getItem("existuser")).username)

  },[])
  console.log(usernames);
  return (
    <>
    <Header dashboard/>
    <h3 className='mt-5'>Welcome<span className='text-warning ms-3'>{usernames}</span>  </h3>
   <Row className='container-fluid mt-5'>
    <Col md={8}>
      <Myproject/>

    </Col>
    <Col md={4}>
      <Profile/>

</Col>


   </Row>

    </>
  )
}

export default Dashboard