
import { Menu } from "../Menu/Menu";
import ls from "./Header.module.css";

export const Header = ({counter}) => {

  let menuHeaderElements = [
    { id: 1, name: "SHOP" },
    { id: 2, name: "GAMES" },
    { id: 3, name: "METAVERSE" },
  ];

  return (
    <div className="container">
      <nav className={ls.nav}>
        <Menu elements={menuHeaderElements}/>
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
