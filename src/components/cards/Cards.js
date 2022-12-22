import React from 'react'
import { CardList } from '../../utils/CardList';
import "./Card.css";

const Cards = () => {
  return (
    <div className="card_body">
      <div className="container">
        <div className="card_content">
          <div>
            <p>Recent posts</p>
          </div>
          <div>
            <a href=''>View all</a>
          </div>
        </div>

        <div className="cards_list">
          { CardList.map((item, id) => (
            <div key={id} className="card">
              <h3>{item.title}</h3>
              <span>          
                {item.date}
              </span>
              <p>{item.text}</p>
            </div>
            
    

          )
          )}

        </div>

      </div>


    </div>
  )
}

export default Cards;