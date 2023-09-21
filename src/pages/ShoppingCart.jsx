import { useContext, useState } from "react";
import Context from "../components/context";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const [isStock, setIsStock] = useState(false);

  const {
    state,
    handleRemoveCart,
    handleAddtoCart,
    loading,
    products,
    handleUpdateCart,
    handleScrollTop,
  } = useContext(Context);

  let num = 0;
  let amount = 0;
  const totalAmount = (id, price) => {
    amount += state.cartItems[id] * price;
  };

  const handleChange = (e, id, stock) => {
    handleUpdateCart(e.target.value, id);
    e.target.value >= stock ? setIsStock(true) : setIsStock(false);
  };

  return (
    <>
      <h3 className="font ps-3 mb-3">Shopping cart : </h3>
      <div className="container w-100">
        {!loading &&
          products.map(({ id, thumbnail, title, price, stock }) => {
            if (state.cartItems[id] !== 0) {
              return (
                <div
                  key={id}
                  className="row mt-2 border-bottom border-primary p-2"
                >
                  <div className="col-1 pt-4 pt-sm-2 border-end border-primary">
                    {(num += 1)}.
                  </div>
                  <div className="col-4 border-end border-primary d-sm-flex">
                    <img
                      src={thumbnail}
                      alt="title"
                      className="rounded me-sm-4"
                      style={{ width: "70px", height: "70px" }}
                    />
                    <div className="pt-3">{title}</div>
                  </div>
                  <div className="col-4 pt-4 pt-sm-2 text-center border-end border-primary">
                    <button
                      className="plusMinusButton"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => handleRemoveCart(id)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={state.cartItems[id]}
                      max={stock}
                      className="amountInput"
                      style={{
                        width: "35px",
                        border: "none",
                        color: "inherit",
                      }}
                      onChange={(e) => handleChange(e, id, stock)}
                      onClick={(e) => e.currentTarget.select()}
                    />
                    <button
                      className="plusMinusButton"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => handleAddtoCart(id)}
                    >
                      +
                    </button>
                    <br />{" "}
                    {isStock && (
                      <span className="text-danger fading">
                        max stock left {stock}!
                      </span>
                    )}
                  </div>
                  <div className="col-3 pt-4 pt-sm-2 text-center border-primary">
                    ${price * state.cartItems[id]}
                  </div>
                  {totalAmount(id, price)}
                </div>
              );
            }
            return null;
          })}
      </div>
      {amount === 0 ? (
        <>
          <div className="container text-center my-5">Cart is empty</div>
        </>
      ) : (
        <div className="container my-3">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2"></div>
            <div className="col-4 fw-bold text-center">SubTotal :</div>
            <div className="col-3 fw-bold text-center color">${amount}</div>
          </div>
        </div>
      )}

      <div className="container w-100">
        <div className="d-flex justify-content-end">
          <NavLink className="mt-3 me-2" to="/shop" onClick={handleScrollTop}>
            Continue Shopping
          </NavLink>
          {amount !== 0 && (
            <NavLink to="/checkout" className="">
              <button
                className="mt-2 bg-but btn btn-outline-primary"
                style={{ width: "150px" }}
              >
                Check Out
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
