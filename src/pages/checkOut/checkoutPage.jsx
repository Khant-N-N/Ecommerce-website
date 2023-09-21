import React, { useContext, useState } from "react";
import "./checkout.css";
import CardPayment from "./cardPayment";
import PaymentRadios from "./PaymentRadios";
import Context from "../../components/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DeliveryForm } from "./DeliveryForm";

export const CheckOut = () => {
  const { state, loading, products } = useContext(Context);
  const [selectPay, setSelectPay] = useState("card");
  const [display, setDisplay] = useState(false);

  const handleCheck = (prop) => {
    switch (prop) {
      case "card":
        setSelectPay("card");
        break;
      case "paypal":
        setSelectPay("paypal");
        break;
      case "cash":
        setSelectPay("cash");
        break;
      default:
        <></>;
        break;
    }
  };

  let num = 0;

  let amount = 0;
  const totalAmount = (id, price) => {
    amount += state.cartItems[id] * price;
  };
  let paymentBoard = <></>;
  switch (selectPay) {
    case "card":
      paymentBoard = <CardPayment />;
      break;

    case "paypal":
      paymentBoard = (
        <div className="py-3">
          You will be directed to PayPal to authorize your payment method, then
          you will be returned to this page to complete this purchase.{" "}
        </div>
      );
      break;
    case "cash":
      paymentBoard = (
        <div className="py-3">
          <span className="text-warning">Note*</span> Cash on delivery payment
          will only available for Yangon and Mandalay Regions
        </div>
      );
      break;
    default:
      <></>;
      break;
  }

  return (
    <div className="container">
      <DeliveryForm />
      <div className="w-100 w-md-50">
        {<PaymentRadios handleCheck={handleCheck} />}
        <div
          style={{
            borderRadius: "9px",
            border: `${state.dark ? "1px solid #dfe3e5" : "2px solid #191c1f"}`,
          }}
          className="row p-1 p-md-2 m-1"
        >
          {paymentBoard}
        </div>
      </div>
      <hr />
      <div
        className="d-flex flex-column align-items-center"
        style={{
          borderRadius: "9px",
          border: `${state.dark ? "1px solid #dfe3e5" : "2px solid #191c1f"}`,
        }}
      >
        <div
          className="d-flex justify-content-around w-75 pt-2"
          style={{ cursor: "pointer" }}
          onClick={() => setDisplay(!display)}
        >
          <h4>Order Summary</h4>
          <FontAwesomeIcon className="mt-1" icon={faChevronDown} />
        </div>
        <hr className="w-75" />
        <div className={`w-75 ${display ? "" : "display"}`}>
          {!loading &&
            products.map(({ id, title, price }) => {
              if (state.cartItems[id] !== 0) {
                return (
                  <div key={id} className="d-flex justify-content-between">
                    <div style={{ width: "15%" }} className="me-1">
                      {(num += 1)}.
                    </div>
                    <div style={{ width: "35%" }} className="me-1">
                      {title}
                    </div>
                    <div className="w-25 me-1 text-end">
                      {state.cartItems[id]}×
                    </div>
                    <div className="w-25 me-1 text-end color">
                      ${price * state.cartItems[id]}
                    </div>
                    {totalAmount(id, price)}
                  </div>
                );
              }
              return null;
            })}
        </div>
        <p className="text-end w-75 my-2">
          total : <span className="color bold">${amount}</span>
        </p>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <button
          type="button"
          style={{ height: "2.5rem" }}
          className="btn btn-primary w-50 my-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
