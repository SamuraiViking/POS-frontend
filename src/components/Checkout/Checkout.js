import React, { useEffect, useState } from 'react'
import Products from '../Products/Products.jsx'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './Checkout.css'
import axios from 'axios';

const Checkout = (props) => {

  const {
    cart,
    chargeAmount,
    onCheckout,
    onPayWithCash,
    onQtyChange,
    prevChargeAmount,
    onEmailReceipt,
    askForReceipt,
    onMount,
    setCart
  } = props

  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className="checkout">
      <Button
        id="cash-btn"
        className="extra-btn"
        variant="success"
        onClick={() => onPayWithCash()}
        size="lg"
        disabled={chargeAmount === 0}
        block
      >
        Pay With Cash
      </Button>
      {askForReceipt ?
        <Button
          id="cash-btn"
          className="extra-btn"
          variant="warning"
          onClick={onEmailReceipt}
          size="lg"
          block
        >
          Get Email Address ( Coach Reimburshment )
        </Button>
        :
        null
      }
      <div className="checkout-header">
        <div id="total-container">
          <span id="total">Total</span>
        </div>
        <div id="amount-container">
          <span id="amount">${chargeAmount}</span>
        </div>
      </div>
      <Products
        cart={cart}
        onQtyChange={onQtyChange}
      />
      <Button size="lg" className="checkout-btn" disabled={chargeAmount === 0} onClick={() => onCheckout()} block>Checkout</Button>
    </div>
  )
}

export default Checkout;