import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className={
              currentPage === number ? "page-item focused" : "page-item"
            }
            key={number}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </li>
        ))}
      </ul>
      <div className="btnGroup">
        <button onClick={prevPage}>{"<<"}</button>
        <button onClick={nextPage}>{">>"}</button>
      </div>
    </div>
  );
};

export default Pagination;
