import React, { useState } from "react";

const RedactWindow = ({ setShowRed, post, posts, setPosts }) => {
  const [value, setValue] = useState({
    title: post.title,
    about: post.about,
    text: post.text,
  });

  function saveFunc() {
    const arr = posts.filter((p) => p.id !== post.id);

    setPosts([
      ...arr,
      {
        ...post,
        title: value.title,
        about: value.about,
        text: value.text,
      },
    ]);

    setShowRed({ post: null, show: false });
  }

  return (
    <div className="redact">
      <h2>Название</h2>
      <input
        type="text"
        value={value.title}
        onChange={(e) => setValue({ ...value, title: e.target.value })}
      />
      <h2>Описание</h2>
      <input
        type="text"
        value={value.about}
        onChange={(e) => setValue({ ...value, about: e.target.value })}
      />
      <h2>Текст</h2>
      <textarea
        id="textAr"
        type="text"
        value={value.text}
        onChange={(e) => setValue({ ...value, text: e.target.value })}
      />
      <button onClick={() => saveFunc()}>Сохранить</button>
    </div>
  );
};

export default RedactWindow;
