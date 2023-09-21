import { useContext, useState } from "react";
import Context from "../components/context";
import CreateProduct from "../components/createProducts";
import Pagination from "../components/paginate";
import { NavLink } from "react-router-dom";

const Favourite = () => {
  const { state, products, loading } = useContext(Context);

  let favouriteArray = [];
  [...new Set(state.favItems)].map((item) => {
    return favouriteArray.push(
      ...products.filter((fil) => fil.id === parseInt(item))
    );
  });

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  let currentItems = [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  currentItems = favouriteArray.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div id="paginateScroll">
        <NavLink to="/shop" className="px-2 py-3 mb-3">
          Back to Shop
        </NavLink>
        <h3 className="px-2 mt-2 fs-4 font">Your added favourite products: </h3>
        <div className="containerCards">
          {!loading && <CreateProduct product={currentItems} />}
        </div>
        <div className="my-5">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={favouriteArray.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Favourite;
