import React, { useState } from "react";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import uuid from "react-uuid";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userPosts, setUserPosts] = useState([
    {
      author: "Nick",
      title: "Apple pen",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 1,
      date: "2022.06.25",
      likes: 20,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Oleg",
      title: "Apple car",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 2,
      date: "2022.03.25",
      likes: 20,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Shelli",
      title: "one tika",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 3,
      date: "2022.04.11",
      likes: 100,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Nita",
      title: "car wash",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 4,
      date: "2021.04.25",
      likes: 43,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Forest",
      title: "run forest",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 5,
      date: "2021.04.20",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Zus",
      title: "gravity false 4ever",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 6,
      date: "2021.04.10",
      likes: 11,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Amber",
      title: "fire ball",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 7,
      date: "2021.04.11",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Forest",
      title: "run forest",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 8,
      date: "2021.04.20",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Zus",
      title: "gravity false 4ever",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 9,
      date: "2021.04.10",
      likes: 11,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Amber",
      title: "fire ball",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: 10,
      date: "2021.04.11",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Nick",
      title: "Apple pen",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2022.06.25",
      likes: 20,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Oleg",
      title: "Apple car",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2022.03.25",
      likes: 20,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Shelli",
      title: "one tika",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2022.04.11",
      likes: 100,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Nita",
      title: "car wash",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.25",
      likes: 43,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Forest",
      title: "run forest",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.20",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Zus",
      title: "gravity false 4ever",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.10",
      likes: 11,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Amber",
      title: "fire ball",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.11",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Forest",
      title: "run forest",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.20",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Zus",
      title: "gravity false 4ever",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.10",
      likes: 11,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
    {
      author: "Amber",
      title: "fire ball",
      about: "Описание",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, fugit, hic voluptates iusto ratione quo eius optio doloremque dolorem, sequi reiciendis ullam illo iste officia vel. Architecto, quasi et.",
      id: uuid(),
      date: "2021.04.11",
      likes: 24,
      comments: [
        {
          name: "Oleg",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 30,
          id: uuid(),
        },
        {
          name: "Vasiliy",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 11,
          id: uuid(),
        },
        {
          name: "Uana",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur dicta nostrum, nemo veniam dolor cumque nesciunt rerum officia dignissimos suscipit eum reprehenderit magnam temporibus molestiae iusto! Ducimus, maiores qui.",
          comLike: 22,
          id: uuid(),
        },
      ],
    },
  ]);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userPosts, setUserPosts }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
