//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "../1-NavBar/NavBar.module.css";

import { ReactComponent as Cv } from "../../images/icons/contact-icon-cv.svg";
import { ReactComponent as Tlg } from "../../images/icons/contact-icon-tlg.svg";
import { ReactComponent as Hh } from "../../images/icons/contact-icon-hh.svg";
import { ReactComponent as In } from "../../images/icons/contact-icon-in.svg";

const contactLinks = [
  [
    <Cv className={style.nav__contacts__icons} />,
    "Резюме на русском",
    "/files/CV_Frontend_Pavel.Plekhanov.pdf",
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
    "www.linkedin.com/in/pavel-plekhanov",
    "contact-icon-in.svg",
  ],
];

export default function SocialIcons({ setActiveMenu, off }) {
  return (
    <div className={style.nav__contacts__social}>
      {off ? null : <h4> Резюме </h4>}
      <ul>
        {contactLinks.map((li, index) => (
          <li key={li[2]}>
            <a
              target="_blank"
              download
              href={li[2]}
              onClick={() => setActiveMenu(false)}
              rel="noreferrer"
            >
              {li[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
