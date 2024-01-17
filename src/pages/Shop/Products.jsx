import React, { useContext } from 'react'
import { shopContext } from '../../Context/shopContext'

function Products(props) {

    const {id, productName, Price, productImage} = props.data
    const {addToCart, cartItems} = useContext(shopContext)
  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
        <img alt='' src={productImage}/>

        <div className='description'>
            <p><b>{productName}</b></p>

            <p> ${Price} </p>
        </div>

        <button className='AddToCart' onClick={()=> addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }
        </button>
    </div>
  )
}

export default Products