//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";
import { ReactComponent as Cv } from "../../images/icons/contact-icon-cv.svg";
import { ReactComponent as Tlg } from "../../images/icons/contact-icon-tlg.svg";
import { ReactComponent as Hh } from "../../images/icons/contact-icon-hh.svg";
import { ReactComponent as In } from "../../images/icons/contact-icon-in.svg";

const contactLinks = [
  [
    <Cv className={style.nav__contacts__icons} />,
    "Резюме на русском",
    "/public/files/CV_Fullstack_Pavel.Plekhanov.txt",
    "contact-icon-cv.svg",
  ],
  [
    <Tlg className={style.nav__contacts__icons} />,
    "Telegram",
    "https://t.me/pavel_trader",
    "contact-icon-tlg.svg",
  ],
  [
    <Hh className={style.nav__contacts__icons} />,
    "HeadHunter",
    "https://hh.ru/pavelplekhanov",
    "contact-icon-hh.svg",
  ],
  [
    <In className={style.nav__contacts__icons} />,
    "LinkedIn",
    "https://linkedin.com/in/pavelplekhanov",
    "contact-icon-in.svg",
  ],
];

export default function NavContacts({ setActiveMenu }) {
  return (
    <div className={style.nav__contacts}>
      <div className={style.nav__contacts__email}>
        <span> Моя почта </span>
        <a
          href="mailto:plekhanov.pavel.job@gmail.com"
          onClick={() => setActiveMenu(false)}
        >
          plekhanov.pavel.job@gmail.com
        </a>
      </div>
      <div className={style.nav__contacts__social}>
        <h4> Резюме </h4>
        <ul>
          {contactLinks.map((li) => (
            <li>
              <a href={li[2]} onClick={() => setActiveMenu(false)}>
                {li[0]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
