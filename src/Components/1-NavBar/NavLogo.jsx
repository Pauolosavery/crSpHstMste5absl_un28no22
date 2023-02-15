//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu }) {
  return (
    <div className={style.navMenu__header}>
      <a href="#Home" className={style.header__logo} />
      <button onClick={() => setActiveMenu(!activeMenu)}>
        <div className={style.burger}>
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
