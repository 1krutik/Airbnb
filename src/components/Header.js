import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" width={140} height={80} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul style={{fontFamily :'roboto', fontSize:"1.5em"}} className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto"> {/* Center alignment */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/properties">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-danger me-2">Login</Link>
            <Link to="/signup" className="btn btn-danger">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
