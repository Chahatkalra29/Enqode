import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import axios from "axios";
import logo from "../assets/logo-transparent-bg.png";

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleLogOut = async () => {
      const token = localStorage.getItem('utoken')
      try {
        const response = await axios.get("http://localhost:5000/userapi/logoutuser", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(response)
        localStorage.removeItem('utoken')
        navigate('/login')
        
      } catch (error) {
        console.log(error)
      }
    }
    const isActive = (path) => location.pathname === path
    return (
      <nav className='bg-txt-dark text-bg-light font-sf-pro shadow-md py-4 px-6'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/*logo */}
            <div className='flex items-center text-bg-light'><Link to="/dashboard" className="text-xl font-bold">
            <img className="h-15 w-15" src={logo} alt="Enqode Logo" /></Link>
            <span>Enqode</span></div>
            
            
            {/*desktop menu */}
            
            <ul className="flex space-x-6">
            <div className='flex space-x-6 items-center'><li><Link to="/dashboard" className="hover:text-royal-blue">Dashboard</Link></li>
              <li><Link to="/enqodeLink" className="hover:text-royal-blue">New QR</Link></li>
              <li><Link to="/allLinks" className="hover:text-royal-blue">Saved</Link></li></div>
              
              <li>
                <button 
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar