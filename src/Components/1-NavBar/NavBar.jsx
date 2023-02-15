//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import { useState } from "react";
import style from "./NavBar.module.css";
import NavContacts from "./NavContacts";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  let headerStyle = "";
  activeMenu
    ? (headerStyle = `${style.header} ${style.header__active}`)
    : (headerStyle = style.header);

  return (
    <header className={headerStyle}>
      <div className={style.header__container}>
        <NavLogo setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        <NavList activeMenu={activeMenu} />
        <NavContacts activeMenu={activeMenu} />
      </div>
    </header>
  );
}
