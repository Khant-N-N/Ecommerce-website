import React, { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import CreateProduct from "../components/createProducts";
import SearchBox from "../components/searchBox";
import Pagination from "../components/paginate";
import Context from "../components/context";

const itemsPerPage = 8; // Number of items per page for pagination
const Products = () => {
  const { loading, products } = useContext(Context);
  const [filteredProducts, setfilteredProducts] = useState([...products]); // to filter the product by buttons

  const [selectCategory, setSelectCategory] = useState("all"); //to set the category value for filter
  const [selectPrice, setSelectPrice] = useState("Any"); // to set the price value for filter

  const cateRef = useRef(); // to change the category filter text

  useEffect(() => {
    // update the filteredProducts with the fetch data changes
    setfilteredProducts([...products]);
  }, [products]);

  const handleSortCategory = (e) => {
    //get value attribute onClick of category dropdowns
    setSelectCategory(e.currentTarget.getAttribute("value"));
  };

  const handleSortPrice = (e) => {
    //get value attribute onClick of price dropdowns
    setSelectPrice(e.currentTarget.getAttribute("value"));
    switch (e.currentTarget.getAttribute("value")) {
      case "under $500":
        setfilteredProducts(products.filter((product) => product.price <= 500));
        cateRef.current.innerText = "All";
        setCurrentPage(1);

        break;
      case "$500-$1000":
        setfilteredProducts(
          products.filter(
            (product) => product.price >= 500 && product.price <= 1000
          )
        );
        cateRef.current.innerText = "All";
        setCurrentPage(1);

        break;
      case "over $1000":
        setfilteredProducts(
          products.filter((product) => product.price >= 1000)
        );

        cateRef.current.innerText = "All";
        setCurrentPage(1);

        break;
      case "Any":
        setfilteredProducts([...products]);
        cateRef.current.innerText = "All";
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    //filter product by category value
    if (selectCategory === "all") {
      setfilteredProducts([...products]);
    } else {
      setfilteredProducts(
        products.filter((product) => product.category === selectCategory)
      );
      setSelectPrice("Any");
      setCurrentPage(1);
    }
  }, [selectCategory, products]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  let currentItems = [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div id="paginateScroll">
      <SearchBox />
      {/* sort buttons */}
      <div className="d-flex justify-content-end px-lg-5 px-md-2">
        <div className="d-flex">
          <Dropdown className="me-3">
            <Dropdown.Toggle
              className="bg-but focus"
              variant="outline-primary"
              id="dropdown-basic"
            >
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="smartphones" onClick={handleSortCategory}>
                Smart phones
              </Dropdown.Item>
              <Dropdown.Item value="laptops" onClick={handleSortCategory}>
                Laptops
              </Dropdown.Item>
              <Dropdown.Item value="fragrances" onClick={handleSortCategory}>
                Fragrances
              </Dropdown.Item>
              <Dropdown.Item value="skincare" onClick={handleSortCategory}>
                Skin cares
              </Dropdown.Item>
              <Dropdown.Item value="groceries" onClick={handleSortCategory}>
                Groceries
              </Dropdown.Item>
              <Dropdown.Item
                value="home-decoration"
                onClick={handleSortCategory}
              >
                Home decoration
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item value="all" onClick={handleSortCategory}>
                —Browse all items
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="me-3">
            <Dropdown.Toggle
              className="bg-but focus"
              variant="outline-primary"
              id="dropdown-basic"
            >
              Price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="Any" onClick={handleSortPrice}>
                Any range
              </Dropdown.Item>
              <Dropdown.Item value="under $500" onClick={handleSortPrice}>
                under $500
              </Dropdown.Item>
              <Dropdown.Item value="$500-$1000" onClick={handleSortPrice}>
                $500 - $1000
              </Dropdown.Item>
              <Dropdown.Item value="over $1000" onClick={handleSortPrice}>
                over $1000
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* sort location */}
      <div className="d-flex flex-wrap p-1 ms-lg-5 my-2">
        <h5 className="mx-2 mt-2">
          Category :{" "}
          <span ref={cateRef} className="color">
            {selectCategory}
          </span>{" "}
          /
        </h5>
        <h6 className="mt-2">
          Price range : <span className="color">{selectPrice}</span>
        </h6>
      </div>
      {/* Show Products */}
      <div className="containerCards">
        {loading ? (
          <div className="w-100 text-center load">
            <FontAwesomeIcon className="loader" icon={faSpinner} />
          </div>
        ) : (
          <CreateProduct product={currentItems} />
        )}
      </div>
      <div className="my-5">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredProducts.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
