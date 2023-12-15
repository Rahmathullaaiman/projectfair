import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import titleimage from '../images/download (1).jpeg';
import Procard from '../components/Procard';
import { Link } from 'react-router-dom';

function Home() {
  const[login,Setlogin] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      Setlogin(true)
    }

  },[])
  console.log(login);
  return (
    <>
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
        <div className='container-fluid-rounded'>
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
              <h1 style={{ fontSize: '65px', color: 'black' }}>Project Fair</h1>
              <p style={{ color: 'black' }}>One stop destination for all software development projects</p>
            {login? 
             <Link to={'/dashboard'} className='btn btn-success rounded'>Manage Projects<i className="fa-solid fa-arrow-right ms-3"></i></Link>:
              <Link to={'/Login'} className='btn btn-success rounded'>Get started <i className="fa-solid fa-arrow-right ms-3"></i></Link>}
            </Col>
            <Col sm={12} md={6}>
              <img className='w-75' style={{ marginTop: '100px', borderRadius: '30px' }} src={titleimage} alt="" />
            </Col>
          </Row>
        </div>


      </div>
      <div className='allpro mt-5'>
        <h1 className='text-center mt-5'>All Projects</h1>
        <marquee scrollAmount={20}>
          <div className='d-flex justify-content-evenly mt-5'>
            <div className='ms-5' style={{ width: '150px' }}>
              <Procard />
            </div>
            <div className='ms-5' style={{ width: '150px' }}>
              <Procard />
            </div>
            <div className='ms-5' style={{ width: '150px' }}>
              <Procard />
            </div>
          </div>
        </marquee>
        <div className='text-center mt-5'>
          <Link to={'/project'}>See more project</Link>
        </div>
      </div>






    </>
  );
}

export default Home;
