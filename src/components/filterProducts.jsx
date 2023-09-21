import { useContext, useState } from "react";
import Context from "./context";
import CreateProduct from "./createProducts";
import { NavLink } from "react-router-dom";

const FilteredProducts = ({ title, product, id }) => {
  const { loading, handleScrollTop } = useContext(Context);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const handleScrollRight = () => {
    document.getElementById(id).scrollLeft += 300;
  };
  const handleScrollleft = () => {
    document.getElementById(id).scrollLeft -= 300;
  };

  const handleScroll = () => {
    const containerWidth = document.getElementById(id).offsetWidth;
    const scrollPosition = document.getElementById(id).scrollLeft;
    const scrollWidth = document.getElementById(id).scrollWidth;

    if (scrollPosition === 0) {
      setDisableLeft(true);
    } else {
      setDisableLeft(false);
    }

    if (scrollPosition + containerWidth >= scrollWidth - 10) {
      setDisableRight(true);
    } else {
      setDisableRight(false);
    }
  };

  return (
    <div className="main">
      <h3 className="w-100 ps-3 mb-5">{title} products :</h3>
      <button
        className={`scrollLeft position-absolute ${
          disableLeft ? "disable" : ""
        }`}
        onClick={handleScrollleft}
      >
        ◁
      </button>
      <div className="popularitems" id={id} onScroll={handleScroll}>
        {loading ? <h1>Loading...</h1> : <CreateProduct product={product} />}
      </div>
      <button
        className={`scrollRight position-absolute ${
          disableRight ? "disable" : ""
        }`}
        onClick={handleScrollRight}
      >
        ▷
      </button>
      <div className="d-flex flex-row-reverse me-3" style={{ width: "100%" }}>
        <NavLink
          onClick={handleScrollTop}
          className="me-lg-5 me-3 my-3"
          to="/shop"
        >
          See All Products
        </NavLink>
      </div>
    </div>
  );
};

export default FilteredProducts;
