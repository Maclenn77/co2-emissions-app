import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

    return (
  <nav className='d-flex justify-content-between'>
    <button type='button' onClick={() => navigate(-1) }>Arrow</button>
    <h1>Co2 Emission per capita</h1>
    <Link to='/more'>More info</Link>
  </nav>
);}

export default Navbar;
