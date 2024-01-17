import React , {useContext}from 'react'
import { shopContext } from '../../Context/shopContext'

function CartItems(props) {
    const { id,productName, Price, productImage} = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(shopContext)

  return (
    <div className='cartItem'>
        <img alt='' src={productImage}/>

        <div className='description'>
            <p><b>{productName}</b></p>

            <p> ${Price} </p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]} 
                onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems