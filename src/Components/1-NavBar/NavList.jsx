//<a href='https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595'>
import style from "./NavBar.module.css";

export default function NavList({ setActiveMenu }) {
  const menuLinks = [
    ["Мой стек", "#Skill"],
    ["Мои проекты", "#Portfolio"],
    ["Обо мне", "#About"],
    ["Связаться", "#Contact"],
  ];

  return (
    <nav className={style.navList__body}>
      <ul className={style.navList__menu}>
        {menuLinks.map((li) => (
          <li key={li[1]}>
            <a href={li[1]} key={li[0]} onClick={() => setActiveMenu(false)}>
              {li[0]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
