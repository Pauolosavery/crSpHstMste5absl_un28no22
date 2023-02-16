//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu, top }) {
  let burgerStyle = "";
  let menuStyle = `${style.navMenu__header}`;
  activeMenu
    ? (burgerStyle = style.burger__active)
    : (burgerStyle = style.burger);
  // if (top) menuStyle += `${style.top}`;
  return (
    <div className={menuStyle}>
      <a href="#Home" className={style.navLogo__ico} />
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
