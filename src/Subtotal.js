import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const sum = (key) => ((accumulator, currentValue) => accumulator + (currentValue[key] || 0));
  const totalPrice = basket.reduce(sum('price'), 0).toFixed(2);
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            Subtotal ({basket.length} items): <strong>{`$${totalPrice}`}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox"/> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={0} // assignment
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
