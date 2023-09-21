import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const PaymentRadios = ({ handleCheck }) => {
  const [isChecked, setIsChecked] = useState("value1");

  const autoChecked = (e) => {
    setIsChecked(e.target.value);
  };
  return (
    <div className="ps-2">
      <h4 className="font bold">Choose Payment : </h4>
      <Form>
        <div key={`block-radio`} className="mb-3">
          <Form.Check block type="radio" id={`block-radio-1`}>
            <Form.Check.Input
              type="radio"
              onChange={(e) => {
                handleCheck("card");
                autoChecked(e);
              }}
              name="group1"
              value="value1"
              checked={isChecked === "value1"}
            />
            <Form.Check.Label>
              <FontAwesomeIcon icon={faCreditCard} /> Card
            </Form.Check.Label>
          </Form.Check>

          <Form.Check block type="radio" id={`block-radio-3`}>
            <Form.Check.Input
              type="radio"
              name="group1"
              value="value2"
              onChange={(e) => {
                handleCheck("paypal");
                autoChecked(e);
              }}
              checked={isChecked === "value2"}
            />
            <Form.Check.Label>
              <FontAwesomeIcon icon={faPaypal} /> PayPal
            </Form.Check.Label>
          </Form.Check>

          <Form.Check block type="radio" id={`block-radio-4`}>
            <Form.Check.Input
              type="radio"
              name="group1"
              value="value3"
              onChange={(e) => {
                handleCheck("cash");
                autoChecked(e);
              }}
              checked={isChecked === "value3"}
            />
            <Form.Check.Label>
              <FontAwesomeIcon icon={faWallet} /> Cash on Delivery
            </Form.Check.Label>
          </Form.Check>
        </div>
      </Form>
    </div>
  );
};

export default PaymentRadios;
