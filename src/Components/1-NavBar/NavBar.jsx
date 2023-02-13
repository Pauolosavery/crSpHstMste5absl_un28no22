//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";
import NavContacts from "./NavContacts";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

export default function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <NavLogo />
        <NavList />
        <NavContacts />
      </div>
    </header>
  );
}
// <div className={style.header__menu}>
//   <div className={style.menu__icon}>
//     <span></span>
//   </div>
//
// </div>
