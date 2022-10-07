import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import MyPostsList from "./MyPostsList";

const MyPostsBlock = () => {
  const { userPosts, setUserPosts } = useContext(AuthContext);

  return (
    <main>
      <h2>Мои посты</h2>
      <MyPostsList posts={userPosts} setPosts={setUserPosts} />
    </main>
  );
};

export default MyPostsBlock;
