import React from "react";
import cards from "../../photo/cards.png";
import cards2 from "../../photo/ca.png";

const CardPayment = () => {
  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        {" "}
        <span className="bold pt-3">Card Detalis</span>
        <div>
          <div style={{ width: "200px" }}>
            <img src={cards} alt="cards" style={{ width: "100%" }} />
          </div>
          <div style={{ width: "200px" }}>
            <img src={cards2} alt="cards2" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column m-1 cNumberContainer">
          <label htmlFor="cNumber">Card Number </label>
          <input
            type="text"
            id="cNumber"
            className="inputStyle"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="d-flex cNumberContainer justify-content-md-around justify-content-lg-start my-2 ">
          <div className="d-flex flex-column m-1 me-2">
            <label htmlFor="exp">Expiration Date </label>
            <input
              type="text"
              id="exp"
              className="inputStyle"
              placeholder="MM/YY"
              style={{ maxWidth: "7rem" }}
            />
          </div>

          <div className="d-flex flex-column m-1">
            <label htmlFor="cvv">Security Code</label>
            <input
              type="text"
              id="cvv"
              className="inputStyle"
              placeholder="CVV"
              style={{ maxWidth: "4rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPayment;
