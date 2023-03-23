//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavLogo({ setActiveMenu, activeMenu, top }) {
  const menuStyle = {
    navLogo: style.navLogo,
    navLogo__btn: style.navLogo__btn,
    lineUp: style.navLogo__burger__line__up,
    lineMed: style.navLogo__burger__line__med,
    lineDown: style.navLogo__burger__line__down,
  };
  if (!top) menuStyle.navLogo += ` ${style.top}`;
  if (activeMenu) {
    menuStyle.navLogo += ` ${style.navLogo__active}`;
    menuStyle.navLogo__btn = style.navLogo__btn__a;
    menuStyle.lineUp += ` ${style.navLogo__burger__line__up__a}`;
    menuStyle.lineMed += ` ${style.navLogo__burger__line__med__a}`;
    menuStyle.lineDown += ` ${style.navLogo__burger__line__down__a}`;
    document.body.style = "overflow: hidden";
  } else {
    document.body.style = "overflow: visible";
  }
  return (
    <div className={menuStyle.navLogo}>
      <a href="#Home" className={style.navLogo__ico}>
        {null}
      </a>
      <button
        onClick={() => setActiveMenu(!activeMenu)}
        className={menuStyle.navLogo__btn}
      >
        <span className={menuStyle.lineUp} />
        <span className={menuStyle.lineMed} />
        <span className={menuStyle.lineDown} />
      </button>
    </div>
  );
}
