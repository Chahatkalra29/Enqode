import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogOut=()=>{
        localStorage.removeItem('utoken')
        navigate('/login')
    }
  return (
    <nav>
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