//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import { useState, useEffect } from "react";
import Menu from "./Menu";
import style from "./NavBar.module.css";
import NavLogo from "./NavLogo";
import ScrollTop from "./ScrollTop.jsx";

export default function NavBar() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    window.scrollY < 200 ? setTop(true) : setTop(false);
  }, []);
  window.onscroll = () => {
    if (window.scrollY < 200) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  const [activeMenu, setActiveMenu] = useState(false);
  let headerStyle = "";
  activeMenu
    ? (headerStyle = `${style.nav__bar} ${style.nav__bar__active}`)
    : (headerStyle = `${style.nav__bar}`);
  return (
    <header className={headerStyle}>
      <NavLogo
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        top={top}
      />
      {activeMenu ? <Menu setActiveMenu={setActiveMenu} /> : null}
      {top || activeMenu ? null : <ScrollTop />}
    </header>
  );
}
