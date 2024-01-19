import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const {basket} = useContext(BasketContext)
  return (
    <div>
        {basket.map(item=>(
            <div className="card">
                {item.name}
            </div>
        ))}
      
    </div>
  )
}

export default Basket
