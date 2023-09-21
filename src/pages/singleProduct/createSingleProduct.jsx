import React, { useContext, useEffect, useRef } from "react";
import Context from "../../components/context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = ({ products }) => {
  const { state, dispatch, handleScrollTop } = useContext(Context);
  let id, title, description, brand, rating, stock, price;
  products.length !== 0 &&
    ({ id, title, description, brand, rating, stock, price } = products[0]);

  const navigate = useNavigate();

  const numberRef = useRef();
  useEffect(() => {
    numberRef.current.value = 1;
  }, []);

  const handleIncrease = () => {
    if (numberRef.current.value === "") numberRef.current.value = 0;
    numberRef.current.value = parseInt(numberRef.current.value) + 1;
  };
  const handelDecrease = () => {
    if (parseInt(numberRef.current.value) <= 1) return;
    if (parseInt(numberRef.current.value) === "") return;
    numberRef.current.value = parseInt(numberRef.current.value) - 1;
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const addToCart = (id, amount) => {
    dispatch({ type: "CART_UPDATE", id: Number(id), amount: Number(amount) });

    numberRef.current.value = 1;
  };

  return (
    <div id="productDetails">
      <h1 className="font bold">{title}</h1>
      <p id="description">{description}</p>
      <p className="bold">
        Brand : <span className="color">{brand}</span>
      </p>
      <hr></hr>
      <h3 className="bold font color">${price} </h3>
      <span>
        Rating :<i className="color"> {rating}</i>
      </span>
      <i className="rate">
        <i className="fa-regular fa-hand-pointer fa-fade fa-rotate-90"></i> rate
        item
      </i>
      <hr></hr>
      <form onSubmit={submitHandler}>
        <div className="amount">
          <button
            onClick={handelDecrease}
            className="plusMinusButton"
            type="button"
          >
            -
          </button>
          <input
            className="mx-2 amountInput"
            type="number"
            min="1"
            max={stock}
            ref={numberRef}
            onClick={() => numberRef.current.select()}
            required
          />
          <button
            onClick={handleIncrease}
            className="plusMinusButton"
            type="button"
          >
            +
          </button>

          <span className="instock mx-2">
            Only <strong className="color">{stock} items</strong> left! Don't
            miss it.
          </span>
        </div>
        <button
          type="submit"
          className="mt-3 me-2 bg-but btn btn-outline-primary position-relative"
          onClick={() => addToCart(id, numberRef.current.value)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          {state.cartItems[id] !== 0 ? "Update Cart" : "Add to cart"}
          <span className={state.cartItems[id] !== 0 ? "adcAmount" : ""}>
            {state.cartItems[id] !== 0 && state.cartItems[id]}
          </span>
        </button>
        <button
          type="submit"
          className="mt-3 button btn btn-outline-primary"
          style={{ color: "#fff" }}
          onClick={() => {
            navigate("/cart");
            handleScrollTop();
            state.cartItems[id] === 0 && addToCart(id, numberRef.current.value);
          }}
        >
          <FontAwesomeIcon icon={faWallet} /> Buy Now
        </button>
      </form>
    </div>
  );
};

export default SingleProduct;
