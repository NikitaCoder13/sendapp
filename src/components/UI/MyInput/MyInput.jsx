import React from "react";

const MyInput = ({ filter, setFilter }) => {
  return (
    <input
      placeholder="Поиск..."
      type="search"
      className="search"
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
    />
  );
};

export default MyInput;
