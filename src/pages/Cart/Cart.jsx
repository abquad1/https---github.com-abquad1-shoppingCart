import React, {useContext} from 'react'
import { PRODUCTS } from '../Product'
import { shopContext } from '../../Context/shopContext'
import CartItems from './CartItems'
import '../Cart/Cart.scss'
import { useNavigate } from 'react-router-dom'

// import Products from '../Shop/Products'

function Cart() {
        <button> Continue Shopping</button>
  const { cartItems, getTotalCartAmount} = useContext(shopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className='cartTitle'>
        <h1> Your Cart Items</h1>
      </div>

      <div className='cartItems'>
      {PRODUCTS.map((product) => (
    cartItems[product.id] !== 0 && <CartItems data={product}/> 
          
        ))}
      </div>

        {totalAmount > 0? ( 
      <div className='checkOut'>
        <p><b>SubTotal: ${totalAmount}</b></p>
        <button onClick={()=>navigate("/")}> Continue Shopping</button>
        <button> CheckOut</button>

      </div>): (<h1>Your Cart is Empty</h1>)}
    </div>
  )
}

export default Cart