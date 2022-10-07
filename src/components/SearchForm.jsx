import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const SearchForm = ({ filter, setFilter }) => {
  return (
    <div className="searchForm">
      <MyInput filter={filter} setFilter={setFilter} />
      <div>
        <MySelect
          defaultValue="Сортировка по ..."
          options={[
            { value: "more likes", name: "Много лайков" },
            { value: "malo likes", name: "Мало лайков" },
            { value: "new", name: "Новые" },
            { value: "old", name: "Старые" },
          ]}
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
        />
        <button onClick={() => setFilter({ ...filter, query: "" })}>
          Очистить{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
