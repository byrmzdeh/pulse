import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { BasketContext } from '../../context/BasketContext'

const Menu = () => {
  const [data, setData] = useState([])
  const {addBasket} = useContext(BasketContext)
  useEffect(() => {
    fetch('http://localhost:7000/')
      .then((res) => res.json())
      .then((api) => setData(api))

  }, [])

  return (
    <div className='menu'>
      <i className="fa-solid fa-utensils"></i>

      <div className="our">
        <div className='left'></div>
        <h1>Our Menu</h1>
        <div className='left'></div>
      </div>

      <div className="buttons">
        <button>A-Z</button>
        <button>A-Z</button>
        <button>A-Z</button>
        <button>A-Z</button>
        <button>Default</button>
      </div>
      <div className=" cards">
        {data.map(item => (
          <div className="card " key={item._id}>
            <div className="name">
            <h1>{item.name}</h1>
            <i className="fa-regular fa-heart"></i>
            </div>
            <div className="desc">
              <p>{item.desc}</p>
              <p>.................................</p>
              <h2>$ {item.price}</h2>
            </div>
            <button onClick={()=>addBasket(item)}>Cart</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Menu
