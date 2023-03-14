import style from "./Footer.module.css";
import { ReactComponent as Cv } from "../../images/icons/contact-icon-cv.svg";
import { ReactComponent as Tlg } from "../../images/icons/contact-icon-tlg.svg";
import { ReactComponent as Hh } from "../../images/icons/contact-icon-hh.svg";
import { ReactComponent as In } from "../../images/icons/contact-icon-in.svg";
import SocialIcons from "../1-NavBar/SocialIcons";

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
    "www.linkedin.com/in/pavel-plekhanov",
    "contact-icon-in.svg",
  ],
];
export default function Footer() {
  return (
    <footer className={`${style.footer__section}`}>
      <div className={`${style.container}`}>
        <div className={`${style.copyright__text}`}>
          <p>
            <span className={`${style.update__year}`}>
              <div>&#169; {new Date().getFullYear()}</div>
            </span>{" "}
            <text>Сайт создан мной на React</text>
            <div>
              Вдохновлён &#160;
              <a
                href="https://demo.themecon.net/onlyme/html/index-3.html#"
                target="_blank"
                rel="noreferrer"
              >
                Belal
              </a>
            </div>
          </p>
        </div>
        <SocialIcons off={true} />
      </div>
    </footer>
  );
}
