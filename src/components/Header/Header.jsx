import { useState } from "react";
import ls from "./Header.module.css";

export const Header = () => {
  const [counter, setCounter] = useState(0);

  let menuElements = [
    { id: 1, name: "SHOP" },
    { id: 2, name: "GAMES" },
    { id: 3, name: "METAVERSE" },
  ];

  const EachEl = menuElements.map((e) => {
    return (
      <li className={ls.list}>
        <a className={ls.link} href="#">
          {e.name}
        </a>
      </li>
    );
  });
  return (
    <div className="container">
      <nav className={ls.nav}>
        <ul className={ls.menu}>{EachEl}</ul>
        <a className={ls.logo} href="#">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <a className={ls.basket} href="#">
          <img src="images/basket.svg" alt="basket" />
          <span className={ls.inbasket}>{counter}</span>
        </a>
      </nav>
    </div>
  );
};
