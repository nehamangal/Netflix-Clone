import React from "react";
import logo from '../../logo.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header=()=>{
  return(
    <nav className="Navi">
          <img src={logo} alt="logo" />
          <div className="Nav_links">
            <Link to='/'>Tv Shows</Link>
            <Link to='/'>Movie</Link>
            <Link to='/'>Recently Added</Link>
            <Link to='/'>My List</Link>
          </div>

          <ImSearch style={{ color:"white"}} />
          
    </nav>
  )
}

export default Header