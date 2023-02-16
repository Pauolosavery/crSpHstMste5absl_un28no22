//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavContacts({ activeMenu }) {
  // let contcStyle = "";
  // activeMenu
  //   ? (contcStyle = `${style.header__contacts} ${style.header__contacts__active}`)
  //   : (contcStyle = style.header__contacts);
  return (
    <div className={style.header__contacts}>
      <ul>
        <li>
          <a href="mailto:plekhanov.pavel.job@gmail.com">
            plekhanov.pavel.job@gmail.com
          </a>
        </li>
        <li>
          <a href="https://t.me/pavel_trader">Telegram</a>
        </li>
        <li>LINKEDIN</li>
      </ul>
    </div>
  );
}
