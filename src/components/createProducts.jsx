import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "./context";

const CreateProduct = ({ product }) => {
  const { dispatch, state, handleAddtoCart, handleScrollTop } =
    useContext(Context);

  const addBlueHeart = (id) => {
    return state.favItems.some((item) => parseInt(item) === id)
      ? "blueHeart"
      : "";
  };

  // add to fav toggler
  const handleAddtoFav = (e) => {
    if (e.target.classList.contains("blueHeart")) {
      e.target.classList.remove("blueHeart");
      dispatch({
        type: "TOGGLE_FAV",
        payload: e.currentTarget.getAttribute("id"),
      });
    } else {
      e.target.classList.add("blueHeart");
      dispatch({
        type: "TOGGLE_FAV",
        payload: e.currentTarget.getAttribute("id"),
      });
    }
  };

  return (
    <>
      {product.length === 0 ? (
        <div style={{ width: "100vw" }} className="text-center fs-3 py-5">
          No result found!
        </div>
      ) : (
        product.map(({ id, description, price, rating, thumbnail, title }) => {
          return (
            <div key={id} className="productContainer">
              <div className="position-relative" style={{ maxWidth: "315px" }}>
                <FontAwesomeIcon
                  id={`f${id}`}
                  icon={faHeart}
                  className={`fa-heart ${addBlueHeart(id)} `}
                  onClick={handleAddtoFav}
                  title={`${
                    addBlueHeart(id) === "blueHeart"
                      ? "remove from favourite"
                      : "add to favourite"
                  }`}
                />

                <Link
                  to={`/shop/${id}`}
                  className="link"
                  style={{ color: "inherit" }}
                  onClick={handleScrollTop}
                >
                  <div className="showProductContainer">
                    <div className="imgDiv">
                      <img src={thumbnail} loading="lazy" alt="product" />
                    </div>
                    <div className="productNamePrice">
                      <span className="font">{title}</span>
                      <span>${price}</span>
                    </div>
                    <p>
                      <i>Rating : {rating}</i>
                    </p>
                    <p className="description">{description}</p>
                  </div>
                </Link>
              </div>
              <button
                type="button"
                className="addToCart btn btn-outline-primary bg-but position-relative"
                onClick={() => handleAddtoCart(id)}
              >
                add to cart{" "}
                <span className={state.cartItems[id] !== 0 ? "adcAmount" : ""}>
                  {state.cartItems[id] !== 0 && state.cartItems[id]}
                </span>
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default CreateProduct;
