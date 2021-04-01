import React from 'react';
import './Checkout.scss';

import CheckoutAddress from '../CheckoutAddress/CheckoutAddress';

const Checkout = () => {
  return <div className="checkout pt-170px">
    <div className="container">
      <CheckoutAddress />
    </div>
  </div>;
};

export default Checkout;