import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './navbar.css';
import { InfoOutlined as InfoIcon } from '@material-ui/icons/';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="d-flex justify-content-between">
      <button type="button" onClick={() => navigate(-1)} aria-label="Go back"><ArrowBackIcon /></button>
      <Link to="/"><h6>Source: World Bank Data</h6></Link>
      <Link to="/info"><InfoIcon /></Link>
    </nav>
  );
};

export default Navbar;
