import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogOut= async()=>{
      const token= localStorage.getItem('utoken')
      try {
        const response = await axios.get("http://localhost:5000/userapi/logoutuser",{
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
        <div>
            {/*logo */}
            <Link to={"/dashboard"}>Enqode</Link>
             {/*desktop menu */}
             <ul>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={"/enqodeLink"}>New QR</Link></li>
                <li><Link to={"/allLinks"}>Saved</Link></li>
                <li><button onClick={handleLogOut}>Logout</button> </li>
             </ul>
        </div>
    </nav>
  )
}

export default Navbar