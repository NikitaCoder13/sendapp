import React, { useState, useContext } from "react";
import { AuthContext } from "../context";
import uuid from "react-uuid";

const CreatePostBlock = () => {
  const [value, setValue] = useState({
    title: "",
    about: "",
    text: "",
  });
  const { userPosts, setUserPosts } = useContext(AuthContext);

  function savePost() {
    if (value.title && value.about && value.text) {
      setUserPosts([
        ...userPosts,
        {
          author: "Nick",
          title: value.title,
          about: value.about,
          text: value.text,
          id: uuid(),
          date: new Date().toLocaleDateString().split(".").reverse().join("."),
          like: 50,
          comments: [],
        },
      ]);
      setValue({
        title: "",
        about: "",
        text: "",
      });
    }
  }

  return (
    <main className="createPost">
      <h2>Название</h2>
      <input
        type="text"
        value={value.title}
        onChange={(e) => setValue({ ...value, title: e.target.value })}
        placeholder="Введите название..."
      />
      <h2>Описание</h2>
      <input
        type="text"
        value={value.about}
        onChange={(e) => setValue({ ...value, about: e.target.value })}
        placeholder="Введите описание..."
      />
      <h2>Текст</h2>
      <textarea
        id="textAr"
        type="text"
        value={value.text}
        onChange={(e) => setValue({ ...value, text: e.target.value })}
        placeholder="Введите текст..."
      />
      <button onClick={() => savePost()}>Сохранить</button>
    </main>
  );
};

export default CreatePostBlock;
