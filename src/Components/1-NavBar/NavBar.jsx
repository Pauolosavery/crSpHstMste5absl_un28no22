//<a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <a href="#Home" className={style.header__logo}></a>
        <div className={style.header__menu}>
          <div className={style.menu__icon}>
            <span></span>
          </div>
          <nav className={style.menu__body}>
            <ul className={style.menu__list}>
              <li>
                <a href="#Skill" className={style.menu__link}>
                  Мой стек
                </a>
              </li>
              <li>
                <a href="#Portfolio" className={style.menu__link}>
                  Мои работы
                </a>
                <ul className={style.menu__sub__list}>
                  <li>
                    <a href="" className={style.menu__sub__link}>
                      Пиццерия
                    </a>
                  </li>
                  <li>
                    <a href="" className={style.menu__sub__link}>
                      Приватные деловые кабины
                    </a>
                  </li>
                  <li>
                    <a href="" className={style.menu__sub__link}>
                      StarWars API
                    </a>
                  </li>
                  <li>
                    <a href="" className={style.menu__sub__link}>
                      Pokemon API
                    </a>
                  </li>
                </ul>
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
        </div>
      </div>
    </header>
  );
}
