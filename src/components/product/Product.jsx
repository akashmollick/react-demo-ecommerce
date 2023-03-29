import React from 'react'
import './product.css'

const Product = (props) => {
    console.log(props);
    const {img,name,seller,quantity,price,ratings}=props.product;
    
  return (
    <div className='product'>
        <img src={props.product.img} alt="" />
        <div >
        <h3>{name}</h3>
        <p>price:{price}</p>
        <p>manufacturer:{seller}</p>
        <p>ratings:{ratings}</p>
       

        </div>
        <button className='btn-cart'>add to cart</button>
        
    </div>
  )
}

export default Product