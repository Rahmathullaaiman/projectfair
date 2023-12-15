import React from 'react';
import './foot.css';
import {Link} from "react-router-dom"



function Footer() {
  return (
    <div className='mt-5'>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus corporis quia? Quod neque odit ad! Dolorum, at laboriosam accusamus excepturi modi nam, laudantium harum beatae autem odio minima natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum dolor quibusdam vero ex ea, inventore atque ad dolorem culpa pariatur voluptatem, dolore provident odit iste harum eum autem impedit.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 className='fs-4'>GUIDES</h6>
              <ul className="list-unstyled">
              <li>
                <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: "white" }}>React</Link>
              </li>
              <li>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "white" }}>React Bootstrap</Link>
              </li>
              <li>
                <Link to={'https://bootswatch.com/'} style={{ textDecoration: "none", color: "white" }}>Bootswatch</Link>
              </li>
            </ul>
             
             
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 className=' fs-4'>Quick Links</h6>
              <ul className="list-unstyled ">
              <li>
                <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Home page</Link>
              </li>
              <li>
                <Link to={'/Login'} style={{ textDecoration: "none", color: "white" }}>Login</Link>
              </li>
              <li>
                <Link to={'/register'} style={{ textDecoration: "none", color: "white" }}>Register</Link>
              </li>
            </ul>
              
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i class="fa-brands fa-instagram fa-beat"></i></a></li>
                <li><a className="twitter" href="#"><i class="fa-brands fa-twitter fa-beat"></i></a></li>
                <li><a className="dribbble" href="#"><i class="fa-brands fa-linkedin-in fa-beat"></i></a></li>
                <li><a className="linkedin" href="#"><i class="fa-brands fa-facebook fa-beat"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
