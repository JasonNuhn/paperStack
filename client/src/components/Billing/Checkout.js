import React from "react";
import { Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";

import "./billing.css";

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements className="Billing-Card">
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
