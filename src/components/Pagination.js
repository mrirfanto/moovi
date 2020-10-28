import React from "react";

const Pagination = ({ currentPage, totalPages, onChangePagination }) => {
  const handlePageClick = (page) => {
    onChangePagination(page);
  };

  const prevPage = () => {
    handlePageClick(currentPage - 1);
  };

  const nextPage = () => {
    handlePageClick(currentPage + 1);
  };

  const renderPagination = () => {
    const firstPaginationItems = [];
    if (currentPage > 1 && currentPage !== totalPages)
      firstPaginationItems.push(
        <span
          onClick={() => handlePageClick(currentPage - 1)}
          className="pagination__item"
          key={0}
        >
          {currentPage - 1}
        </span>
      );
    for (let i = 0; i < 3; i++) {
      if (currentPage + i < totalPages) {
        firstPaginationItems.push(
          <span
            onClick={() => handlePageClick(currentPage + i)}
            className="pagination__item"
            key={i + 1}
          >
            {currentPage + i}
          </span>
        );
      } else if (currentPage === totalPages) {
        firstPaginationItems.push(
          <span
            onClick={() => handlePageClick(currentPage + i)}
            className="pagination__item"
            key={i}
          >
            {currentPage - i}
          </span>
        );
      }
    }
    return (
      <>
        {currentPage > 1 ? (
          <i
            className="fas fa-chevron-left pagination__item"
            onClick={() => prevPage()}
          ></i>
        ) : (
          ""
        )}
        {currentPage === totalPages
          ? firstPaginationItems.reverse()
          : firstPaginationItems}
        {currentPage + 1 < totalPages ? (
          <span className="pagination__item">...</span>
        ) : (
          ""
        )}
        {currentPage !== totalPages ? (
          <span
            onClick={() => handlePageClick(totalPages)}
            className="pagination__item"
          >
            {totalPages}
          </span>
        ) : (
          ""
        )}
        {currentPage !== totalPages ? (
          <i
            className="fas fa-chevron-right pagination__item"
            onClick={() => nextPage()}
          ></i>
        ) : (
          ""
        )}
      </>
    );
  };

  return <div className="pagination">{renderPagination()}</div>;
};

export default Pagination;
