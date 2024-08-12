import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {gatTotalCartAmount}=useContext(StoreContext)

  return (
    <form  className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='first name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type="email" placeholder='mail address' />
        <input type="text" placeholder='street' />
        <div className='multi-fields'>
          <input type="text" placeholder='city' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type='text' placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals </h2>
          <div>
          <div className="cart-total-detalis">
             <p>Subtotal</p>
             <p>${gatTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <p>Delivery Fee</p>
              <p>${gatTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
             <b>Total</b>
             <b>${ gatTotalCartAmount()===0?0:gatTotalCartAmount()+2}</b>
            </div>
            <hr />
          </div>
            <button >PROCED TO  PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
