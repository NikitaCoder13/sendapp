import React, { useState } from "react";
import RedactWindow from "./RedactWindow";

const MyPostsList = ({ posts, setPosts }) => {
  const [showRed, setShowRed] = useState({ show: false, post: null });

  if (!posts.length) {
    return (
      <h3
        style={{
          textAlign: "center",
          marginTop: "70px",
        }}
      >
        Постов нет :(
      </h3>
    );
  }

  function delPost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <>
      <div className="cardsBlock">
        {posts.map((post) => {
          return (
            <div className="postCard" key={post.id}>
              <div className="cardHeader">
                <div className="wrapperForBin">
                  <h2>{post.title}</h2>
                  <div className="wrapperSettings">
                    <div className="bin" onClick={() => delPost(post.id)}></div>
                    <div
                      className="remake"
                      onClick={() => setShowRed({ post, show: true })}
                    ></div>
                  </div>
                </div>
                <p>{post.about}</p>
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
      {showRed.show ? (
        <RedactWindow
          setShowRed={setShowRed}
          post={showRed.post}
          posts={posts}
          setPosts={setPosts}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MyPostsList;
