import React from 'react'
import { NavbarList } from "../../utils/NavbarList";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <ul>
        { NavbarList.map(item => <li key={item.id}>
          <Link to={item.route}>
            {item.title}
          </Link>
        </li>)}
      </ul>
    </div>
      
  )
}

export default Header;