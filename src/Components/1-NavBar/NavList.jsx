//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavList() {
  return (
    <nav className={style.menu__body}>
      <ul className={style.menu__list}>
        <li>
          <a href="#Skill" className={style.menu__link}>
            Мой стек
          </a>
        </li>
        <li>
          <a href="#Portfolio" className={style.menu__link}>
            Мои проекты
          </a>
        </li>
        <li>
          <a href="#About" className={style.menu__link}>
            Обо мне
          </a>
        </li>
        <li>
          <a href="#Contact" className={style.menu__link}>
            Связаться
          </a>
        </li>
      </ul>
    </nav>
  );
}
