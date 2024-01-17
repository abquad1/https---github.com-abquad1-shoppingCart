import React from 'react'
import { PRODUCTS } from '../Product.js'
import Products from '../Shop/Products.jsx'
import '../Shop/Shop.scss'

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>MakeMefine Shop</h1>
        </div>

        <div className='products'>
            {PRODUCTS.map((product)=>(
                <Products data= {product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop