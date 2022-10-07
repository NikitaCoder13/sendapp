import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context";
import uuid from "react-uuid";

const PostBlock = () => {
  const { userPosts, setUserPosts } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const params = useParams();
  const post = userPosts.find((p) => p.id == params.id);

  function setComm(value) {
    console.log(post.comments);
    setValue("");
  }

  return (
    <main className="postText">
      <div className="postInformation">
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
      <div className="comments">
        <div className="createComment">
          <textarea
            type="text"
            placeholder="Введите комментарий..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={(e) => setComm(e.target.value)}>Отправить</button>
        </div>
        <h3>Комментарии</h3>
        {post.comments.length ? (
          post.comments.map((com) => {
            return (
              <div className="comment" key={com.id}>
                <div className="comHeader">
                  <h5>{com.name}</h5>
                  <h6>{com.date}</h6>
                </div>
                <p>{com.text}</p>
                <div className="comFooter">
                  <p className="commLikes">Нравится {com.comLike}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h4 className="notComm">Комментариев нет...</h4>
        )}
      </div>
    </main>
  );
};

export default PostBlock;
