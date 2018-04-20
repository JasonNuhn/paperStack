import React from "react";
import { CardElement } from "react-stripe-elements";
import { Card, Badge } from "reactstrap";

import "./billing.css";

class CardSection extends React.Component {
  render() {
    return (
      <Card>
        <h4>
          Payment Info <Badge />
        </h4>
        <CardElement
          // style={{ base: { fontSize: "18px" } }}
        />
      </Card>
    );
  }
}

export default CardSection;
