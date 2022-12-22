

import React from 'react'
import { IconList } from '../../utils/IconList';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className='icon_items'>
        {
          IconList.map(item => (
            <div className='icon_image' key={item.id}>
              <img src={item.icon} alt=""/>
            </div>
          ))
        }

        </div>
        <p>Copyright ©2020 All rights reserved </p>


      </div>

    </div>
  )
}

export default Footer;