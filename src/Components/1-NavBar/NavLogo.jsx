//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu, top }) {
  let lineCenterStyle = "";
  let lineStyle = "";
  let menuStyle = "";
  top
    ? (menuStyle = `${style.navLogo}`)
    : (menuStyle = `${style.navLogo} ${style.top}`);
  activeMenu
    ? (lineCenterStyle = style.navLogo__burger__line__active)
    : (lineCenterStyle = style.navLogo__burger__line);
  activeMenu
    ? (lineStyle = style.navLogo__burger__line1__active)
    : (lineStyle = style.navLogo__burger__line1);
  return (
    <div className={menuStyle}>
      <a href="#Home" className={style.navLogo__ico} />
      <button
        onClick={() => setActiveMenu(!activeMenu)}
        className={style.navLogo__burger}
      >
        {/* <div > */}
        <span className={lineStyle} />
        <span className={lineCenterStyle} />
        <span className={lineStyle} />
        {/* </div> */}
      </button>
    </div>
  );
}
