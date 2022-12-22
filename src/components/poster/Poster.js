import React from 'react'
import { Posters } from '../../utils/Posters';
import "./Poster.css";

const Poster = () => {
  return (
    <div className="container">
      <div className="posters_list">
        <p>Featured works</p>
        {
          Posters.map((item, id) => (
            <div className="poster_card" key={id}>
              <div>
                <img  className="image_post" src={item.image} alt=""/>
              </div>
              <div className="post_content">
                <h2>{item.title}</h2>
                <p>{item.release}</p>
                <span>{item.text}</span>
                
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Poster;