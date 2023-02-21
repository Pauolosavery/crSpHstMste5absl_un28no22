//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu, top }) {
  let burgerStyle = "";
  let menuStyle = "";
  top
    ? (menuStyle = `${style.navLogo}`)
    : (menuStyle = `${style.navLogo} ${style.top}`);
  activeMenu
    ? (burgerStyle = style.burger__active)
    : (burgerStyle = style.burger);
  return (
    <div className={menuStyle}>
      <a href="#Home" className={style.navLogo__ico} />
      <button onClick={() => setActiveMenu(!activeMenu)}>
        <div className={burgerStyle}>
          <span className={style.burger__line} />
        </div>
      </button>
    </div>
  );
}
