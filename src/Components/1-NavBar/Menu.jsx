//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";
import NavContacts from "./NavContacts";
import NavList from "./NavList";

export default function Menu({ setActiveMenu }) {
  return (
    <div className={style.menu}>
      <NavList setActiveMenu={setActiveMenu} />
      <NavContacts setActiveMenu={setActiveMenu} />
    </div>
  );
}
