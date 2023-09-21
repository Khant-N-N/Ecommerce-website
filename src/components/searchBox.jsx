import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Context from "./context";
import { NavLink } from "react-router-dom";
import CreateProduct from "./createProducts";
import Pagination from "./paginate";

const itemsPerPage = 8; // Number of items per page for pagination
const SearchBox = () => {
  const { products } = useContext(Context);
  const [filterSearch, setFilterSearch] = useState([]); //to set the searched products
  const [isType, setIsType] = useState(true); // to check if the searchbox being typed
  const [isSearch, setIsSearch] = useState(false); //to toggle the searched products container show/hide
  const [value, setValue] = useState("");

  let typeValue = "";
  const handleKeyUp = (e) => {
    setIsType(false);
    typeValue = e.target.value.toLowerCase();
    setIsSearch(false);
    setValue(typeValue);

    if (e.key === "Enter") {
      //showing searched products when click Enter
      setIsSearch(true);
      setIsType(true);
      return;
    }

    if (typeValue.length === 0) {
      //when there is no type value, remove searchContainer
      setIsType(true);
      setFilterSearch([]);
      return;
    }

    setFilterSearch(
      products.filter(
        (pro) =>
          pro.title.toString().toLowerCase().includes(typeValue) ||
          pro.brand.toString().toLowerCase().includes(typeValue)
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(true);
    setIsType(true);
  };

  useEffect(() => {
    if (filterSearch.length === 0) setIsSearch(false);
  }, [filterSearch]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  let currentItems = [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  currentItems = filterSearch.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column position-relative p-2 mb-3"
      >
        <div className="d-flex align-self-center">
          <Form.Control
            type="search"
            id="searchBox"
            placeholder="Search"
            className="mx-2  mt-2"
            aria-label="Search"
            onKeyUp={handleKeyUp}
            onChange={() => setIsType(true)}
            style={{ width: "280px" }}
            onClick={(e) => e.currentTarget.select()}
          />

          <Button
            type="submit"
            className="me-2 mt-2 bg-but"
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>

          {/* searchbox container for searched products */}
          <div
            id="searchContainer"
            className={`searchContainer ms-2 position-absolute ${
              isType ? "display" : ""
            }`}
          >
            {filterSearch.length === 0 ? (
              <div className="ps-2 pb-2 pt-3">No result!</div>
            ) : (
              filterSearch.map(({ id, title, price, brand }) => {
                return (
                  <NavLink key={id} className="mb-1 link" to={`/shop/${id}`}>
                    <div className="d-flex ps-2">
                      <span className="w-75">
                        {title} <br /> ({brand})
                      </span>
                      <span className="w-25 text-end me-1">${price}</span>
                    </div>
                    <hr />
                  </NavLink>
                );
              })
            )}
          </div>
        </div>
      </Form>

      {/* showing product when searchbox is fired */}

      {isSearch ? (
        <>
          <h4 className="ps-4">
            You search for : <span className="color">{value}</span> <br />
            Found (
            <span className="color">
              {currentItems.length === 0 ? "0" : filterSearch.length}
            </span>
            )
          </h4>
          <div className="containerCards">
            <CreateProduct product={currentItems} />
          </div>
          <div className="my-5">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filterSearch.length}
              onPageChange={handlePageChange}
            />
          </div>
          <hr />
          <hr />
          <h3 className="ps-3 mb-4">Other Products : </h3>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchBox;
