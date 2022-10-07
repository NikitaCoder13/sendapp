import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const PostList = ({ posts }) => {
  const [totalPosts, setTotalPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const navigate = useNavigate();

  if (!posts.length) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "70px",
        }}
      >
        Посты не найдены :(
      </h2>
    );
  }

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev === Math.ceil(posts.length / postsPerPage) ? 1 : prev + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 1 ? Math.ceil(posts.length / postsPerPage) : prev - 1
    );
  };

  return (
    <>
      <div className="cardsBlock">
        {currentPosts.map((post) => {
          return (
            <div
              className="postCard"
              key={post.id}
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <div className="cardHeader">
                <h2>{post.title}</h2>
                <p>Ознакомление</p>
              </div>
              <div className="cardFooter">
                <h3>Автор: {post.author}</h3>
                <div className="bottom-footer">
                  <p className="date">Дата: {post.date}</p>
                  <p className="likes">Нравится {post.likes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default PostList;
