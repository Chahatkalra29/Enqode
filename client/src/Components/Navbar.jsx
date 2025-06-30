import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo-transparent-bg.png';

const Navbar = () => {
  const backendUrl= import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate();
  const location = useLocation();
 

  const handleLogOut = async () => {
    const token = localStorage.getItem('utoken');
    try {
      await axios.get(`${backendUrl}/userapi/logoutuser`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('utoken');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    isActive(path)
      ? 'bg-royal-blue/25 text-white font-semibold px-4 py-2 rounded-md transition tracking-wider'
      : 'text-[var(--color-bg-light)] hover:text-[var(--color-royal-blue)] px-4 py-2 transition';

  return (
    
    <nav className="bg-[var(--color-txt-dark)] text-[var(--color-bg-light)] font-sf-pro shadow-md py-4 px-6 border-b border-grey-soft">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2">
          <img src={logo} alt="Enqode Logo" className="h-10 w-10" />
          <span className="text-2xl font-semibold tracking-wider">Enqode</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-4 items-center text-base font-medium tracking-wide">
          <li>
            <Link to="/dashboard" className={linkClasses('/dashboard')}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/enqodeLink" className={linkClasses('/enqodeLink')}>
              New QR
            </Link>
          </li>
          <li>
            <Link to="/allLinks" className={linkClasses('/allLinks')}>
              Saved
            </Link>
          </li>
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogOut}
          className="bg-[var(--color-txt-dark)] text-[var(--color-bg-light)] px-4 py-2 rounded hover:bg-[var(--color-grey-soft)] transition"
        >
          Logout
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;
