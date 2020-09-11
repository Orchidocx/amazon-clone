import React from 'react'
import './Payment.css'
function Payment() {
  return (
    <div className='payment'>
      <div className="payment__container">
        {/* Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
        </div>
        
        {/* Review Items */}
        <div className="payment__section"></div>

        {/* Payment Method */}
        <div className="payment__section"></div>
      </div>
    </div>
  )
}

export default Payment
