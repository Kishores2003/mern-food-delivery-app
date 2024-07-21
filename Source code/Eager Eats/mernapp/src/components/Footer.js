import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer  style={{backgroundColor:"whitesmoke",padding:"40px" , margin:"20px"}}>
      <div className="container" >
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link to="/" className="text-decoration-none">
              <img src="./Logo.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <p className="text-muted mt-2">© 2024 Eager Eats, Inc</p>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-muted text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/myOrder" className="text-muted text-decoration-none">My Orders</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-muted">Email: info@eagereats.com</span>
              </li>
              <li>
                <span className="text-muted">Phone: +1234567890</span>
              </li>
              {/* Add more contact information */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
