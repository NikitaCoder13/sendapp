import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

const Header = () => {
  const [active, setActive] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
  }

  return (
    <header className={active ? "activeProfileHeader" : ""}>
      <Link to="/posts" className="linkToCreate">
        <h1>SEND</h1>
      </Link>
      <div className="items">
        <Link to="/createpost" className="linkToCreate">
          <div className="createPostImage">
            <div className="createImage"></div>

            <span>Создать</span>
          </div>
        </Link>
        <h5 onClick={() => setActive(!active)}>Профиль</h5>
      </div>
      <ul className={`profile ${active ? "activeProfile" : ""}`}>
        <Link to="/settings" className="linkToMyPosts">
          <li>Настройки</li>
        </Link>
        <Link to="/myposts" className="linkToMyPosts">
          <li>Мои посты</li>
        </Link>
        <li onClick={logout}>Выйти</li>
      </ul>
    </header>
  );
};

export default Header;
