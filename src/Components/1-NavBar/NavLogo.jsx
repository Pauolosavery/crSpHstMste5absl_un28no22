//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo() {
  return (
    <div className={style.navMenu__header}>
      <a href="#Home" className={style.header__logo} />
      <button>
        <div className={style.burger}>
          <span />
          <span className={`${tyle.burger__center`}} />
          <span />
        </div>
      </button>
    </div>
  );
}
