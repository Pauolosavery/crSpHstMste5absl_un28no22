//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu, top }) {
  let burgerStyle = "";
  let menuStyle = `${style.navMenu__header}`;
  activeMenu
    ? (burgerStyle = `${style.header__contacts} ${style.header__contacts__active}`)
    : (burgerStyle = style.header__contacts);
  if (top) menuStyle += `${style.top}`;
  return (
    <div className={menuStyle}>
      <a href="#Home" className={style.header__logo} />
      <button onClick={() => setActiveMenu(!activeMenu)}>
        <div className={burgerStyle}>
          <span />
          <span
            className={`${style.burger__center} ${style.center__active}}`}
          />
          <span />
        </div>
      </button>
    </div>
  );
}
