import React, { useState } from "react";

const SettingsBlock = () => {
  const [user, setUser] = useState({
    nick: "Vasa",
    dateReg: "2022.03.01",
    password: "123qwerty",
  });
  const [value, setValue] = useState({ ...user });
  const [red, setRed] = useState(false);

  function saveSettigns() {
    setUser({ ...user, nick: value.nick, password: value.password });
    setRed(false);
  }

  return (
    <main className="settings">
      <h1>Основные:</h1>
      <div className="settingsWrapper">
        <div className="nickName settingsCard">
          <h2>Ник:</h2>
          {red ? (
            <input
              type="text"
              value={value.nick}
              onChange={(e) => setValue({ ...value, nick: e.target.value })}
            />
          ) : (
            <input type="text" value={user.nick} disabled />
          )}
        </div>
        <div className="password settingsCard">
          <h2>Пароль:</h2>
          {red ? (
            <input
              type="password"
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
          ) : (
            <input type="password" value={user.password} disabled />
          )}
        </div>
        <h2>Дата регистрации: {user.dateReg}</h2>
        {red ? (
          <button onClick={saveSettigns} className="saveBtn">
            Сохранить
          </button>
        ) : (
          <button onClick={() => setRed(true)} className="saveBtn">
            Изменить
          </button>
        )}
        <button className="delBtn">Удалить</button>
      </div>
    </main>
  );
};

export default SettingsBlock;
