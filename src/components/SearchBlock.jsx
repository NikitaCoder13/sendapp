import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "../context";
import PostList from "./PostList";
import SearchForm from "./SearchForm";

const SearchBlock = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const { userPosts, setUserPosts } = useContext(AuthContext);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      if (filter.sort === "new") {
        return [...userPosts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      } else if (filter.sort === "old") {
        return [...userPosts]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .reverse();
      } else if (filter.sort === "more likes") {
        return [...userPosts].sort((a, b) => b.likes - a.likes);
      } else if (filter.sort === "malo likes") {
        return [...userPosts].sort((a, b) => b.likes - a.likes).reverse();
      }
    }
    return userPosts;
  }, [filter.sort, userPosts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <main
      className="searchPage
      "
    >
      <SearchForm filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} />
    </main>
  );
};

export default SearchBlock;
