//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";
import { ReactComponent as Cv } from "../../images/icons/contact-icon-cv.svg";
import { ReactComponent as Tlg } from "../../images/icons/contact-icon-tlg.svg";
import { ReactComponent as Hh } from "../../images/icons/contact-icon-hh.svg";
import { ReactComponent as In } from "../../images/icons/contact-icon-in.svg";

const contactLinks = [
  [
    <Cv />,
    "Резюме на русском",
    "/public/files/CV_Fullstack_Pavel.Plekhanov.txt",
    "contact-icon-cv.svg",
  ],
  [<Tlg />, "Telegram", "https://t.me/pavel_trader", "contact-icon-tlg.svg"],
  [<Hh />, "HeadHunter", "https://hh.ru/pavelplekhanov", "contact-icon-hh.svg"],
  [
    <In />,
    "LinkedIn",
    "https://linkedin.com/in/pavelplekhanov",
    "contact-icon-in.svg",
  ],
];

export default function NavContacts({ setActiveMenu }) {
  return (
    <div className={style.nav__contacts}>
      <div className={style.nav__contacts__email}>
        <span> Напиши мне </span>
        <a
          href="mailto:plekhanov.pavel.job@gmail.com"
          onClick={() => setActiveMenu(false)}
        >
          plekhanov.pavel.job@gmail.com
        </a>
      </div>
      <div className={style.nav__contacts__social}>
        <ul>
          <li>
            <a href={contactLinks[0][2]} onClick={() => setActiveMenu(false)}>
              <Cv className={style.nav__contacts__icons} />
            </a>
          </li>
          <li>
            <a href={contactLinks[1][2]} onClick={() => setActiveMenu(false)}>
              <Tlg className={style.nav__contacts__icons} />
            </a>
          </li>
          <li>
            <a href={contactLinks[2][2]} onClick={() => setActiveMenu(false)}>
              <Hh className={style.nav__contacts__icons} />
            </a>
          </li>
          <li>
            <a href={contactLinks[3][2]} onClick={() => setActiveMenu(false)}>
              <In width="40px" fill="#ccc" stroke="#ccc" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
