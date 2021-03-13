import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <img
        alt=""
        src="./bone.png"
        width="40"
        height="30"
        className="d-inline-block align-top"
      />
      <h1>Dog Town</h1>
    </Navbar>
  )
}

export default Header
