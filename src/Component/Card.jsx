import React from 'react'
import "../style/card.css"


const Card = (props) => {
const addToCart= () => {
    return alert("Item has been added to cart")
}
    return (
   <div className="card">

   <div className="card-img">
        <img src={props.image} alt="" />
    </div>
    <div className="card-content">
    <p className="product-name">{props.name}</p>
    <p className="product-price">N {props.price}</p>
    <p className="product-description">{props.description}</p>
    <div className="icon-container"></div>
    <button onClick={addToCart}>Add to cart</button>
   </div>
   </div>
  )
}

export default Card
