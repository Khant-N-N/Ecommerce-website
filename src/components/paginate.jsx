import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${i === currentPage ? "active" : ""} page-item `}
        >
          <Button
            href="#paginateScroll"
            className="page-link"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
  );
};

export default Pagination;
