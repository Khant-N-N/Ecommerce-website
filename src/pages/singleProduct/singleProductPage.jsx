import { useContext, useEffect, useState } from "react";
import "./singleProduct.css";
import Context from "../../components/context";
import SingleProduct from "./createSingleProduct";
import CreateImg from "./createImg";
import { Link, useParams } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopularItems from "../../components/filterProducts";

const SingleProductPage = () => {
  const { id } = useParams();
  const { loading, products } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(products);
  const [similarProducts, setSimilarProducts] = useState(products);

  useEffect(() => {
    setSelectedProduct(products.filter((fil) => fil.id === Number(id)));
  }, [products, id]);

  useEffect(() => {
    selectedProduct.length !== 0 &&
      setSimilarProducts(
        products.filter((pro) => pro.category === selectedProduct[0].category)
      );
  }, [products, selectedProduct]);

  return (
    <>
      <p className="ms-4 ">
        / <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
        {selectedProduct.length !== 0 && selectedProduct[0].title}
      </p>

      <section className="sProductSection">
        {loading ? (
          <div className="w-100 text-center load">
            <FontAwesomeIcon className="loader" icon={faSpinner} />
          </div>
        ) : (
          <CreateImg products={selectedProduct} />
        )}

        <div className="position-relative p-2 sProductDescriptionDiv">
          <div className="rateBoard">
            <i className="fa-solid fa-xmark closeRate"></i>
            <span>Please rate your opinion.</span> <br />
            <i className="fa-regular star fa-star" data-rating="1"></i>
            <i className="fa-regular star fa-star" data-rating="2"></i>
            <i className="fa-regular star fa-star" data-rating="3"></i>
            <i className="fa-regular star fa-star" data-rating="4"></i>
            <i className="fa-regular star fa-star" data-rating="5"></i>
          </div>
          <span className="thank">Thank you for star</span>
          {loading ? (
            <div className="w-100 text-center load">
              <FontAwesomeIcon className="loader" icon={faSpinner} />
            </div>
          ) : (
            <SingleProduct products={selectedProduct} />
          )}
        </div>
      </section>
      <hr />
      <section>
        <PopularItems title="Similar" product={similarProducts} id="similar" />
      </section>
    </>
  );
};

export default SingleProductPage;
