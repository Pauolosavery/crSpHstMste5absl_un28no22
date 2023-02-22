//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavHeader({ setActiveMenu, activeMenu, top }) {
  let burgerStyle = "";
  let menuStyle = `${style.nav__header}`;
  top
    ? (menuStyle = style.nav__header)
    : (menuStyle = style.nav__header__active);
  activeMenu
    ? (burgerStyle = style.burger__active)
    : (burgerStyle = style.burger);
  return (
    <div className={menuStyle}>
      <a href="#Home" className={style.nav__header__ico} />
      <div
        onClick={() => setActiveMenu(!activeMenu)}
        className={style.burgerStyle}
      >
        <a>
          <span className={style.burger__line} />
        </a>
      </div>
    </div>
  );
}
