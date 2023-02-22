//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";
const contactLinks = [
  ["plekhanov.pavel.job@gmail.com", "mailto:plekhanov.pavel.job@gmail.com"],
  ["https://t.me/pavel_trader", "Telegram"],
  ["LINKEDIN", "https://linkedin.com/in/pavelplekhanov"],
];
export default function NavContacts({ setActiveMenu }) {
  return (
    <div className={style.nav__contacts}>
      <ul>
        {contactLinks.map((li) => (
          <li>
            <a href={li[1]} onClick={() => setActiveMenu(false)}>
              {li[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
