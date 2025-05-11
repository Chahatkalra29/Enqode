import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo-transparent-bg.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = async () => {
    const token = localStorage.getItem('utoken');
    try {
      await axios.get('http://localhost:5000/userapi/logoutuser', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('utoken');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    isActive(path)
      ? 'bg-[var(--color-royal-blue)] text-white font-semibold px-4 py-2 rounded-full transition'
      : 'text-[var(--color-bg-light)] hover:text-[var(--color-royal-blue)] px-4 py-2 transition';

  return (
    <nav className="bg-[var(--color-txt-dark)] text-[var(--color-bg-light)] font-[var(--font-sf-pro)] shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2">
          <img src={logo} alt="Enqode Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold tracking-wide">Enqode</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-4 items-center text-base font-medium">
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
