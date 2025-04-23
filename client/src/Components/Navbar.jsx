import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate()
    
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
    
    return (
      <nav className='bg-[#0b0f1a] text-white shadow-md py-4 px-6'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/*logo */}
            <Link to="/dashboard" className="text-xl font-bold">Enqode</Link>
            
            {/*desktop menu */}
            <ul className="flex space-x-6">
              <li><Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link></li>
              <li><Link to="/enqodeLink" className="hover:text-blue-300">New QR</Link></li>
              <li><Link to="/allLinks" className="hover:text-blue-300">Saved</Link></li>
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