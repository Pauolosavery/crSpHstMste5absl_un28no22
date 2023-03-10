//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "../1-NavBar/NavBar.module.css";
import SocialIcons from "./SocialIcons";

export default function NavContacts({ setActiveMenu }) {
  return (
    <div className={style.nav__contacts}>
      <div className={style.nav__contacts__email}>
        <h4> Моя почта </h4>
        <a
          href="mailto:plekhanov.pavel.job@gmail.com"
          onClick={() => setActiveMenu(false)}
        >
          plekhanov.pavel.job@gmail.com
        </a>
      </div>
      <SocialIcons setActiveMenu={setActiveMenu} />
    </div>
  );
}
