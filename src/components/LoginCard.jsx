import React, { useContext } from "react";
import { AuthContext } from "../context";

const LoginCard = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    setIsAuth(true);
  };

  return (
    <div className="form__wrapper">
      <form className="login">
        <h2>Регистрация/Войти</h2>
        <div>
          <input type="text" required />
          <input type="password" required />
        </div>
        <button onClick={login}>Войти</button>
      </form>
    </div>
  );
};

export default LoginCard;
