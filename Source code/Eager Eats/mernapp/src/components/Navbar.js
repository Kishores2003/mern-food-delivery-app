import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
// Ensure the CSS file is correctly imported

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./Logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-nav-links">
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem('authToken') && (
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/myOrder">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="d-flex custom-buttons">
          {!localStorage.getItem('authToken') ? (
            <>
              <Link className="btn btn-outline-success btn-sm custom-button" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-success btn-sm custom-button" to="/createuser">
                Signup
              </Link>
            </>
          ) : (
            <>
              <button className="btn btn-outline-success btn-sm custom-button" onClick={() => setCartView(true)}>
                My Cart <Badge pill bg="danger">{data.length}</Badge>
              </button>
              {cartView && (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              )}
              <button className="btn btn-outline-danger btn-sm custom-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
