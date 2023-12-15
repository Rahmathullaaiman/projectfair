
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header({dashboard}) {
  return (
    <div>
      <Navbar style={{backgroundColor: "black"}}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'}>
              <i className="fa-brands fa-stack-overflow text-white me-3 fs-2">
                <span style={{marginLeft: "15px"}}>Project Fair</span>
              </i>
            </Link>
          </Navbar.Brand>
          {dashboard && 
            <button className='btn btn-warning'>Logout</button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
