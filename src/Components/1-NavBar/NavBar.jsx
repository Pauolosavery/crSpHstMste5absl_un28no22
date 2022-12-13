import { useRef } from "react";
import style from "./NavBar.module.css";

export default function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  };
  return (
    <header>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#Skill">Мои навыки</a>
        <a href="#Portfolio">Примеры работ</a>
        <a href="#About">Обо мне</a>
        <a href="https://preview.themeforest.net/item/onlyme-one-page-personal-portfolio/full_screen_preview/25624595">
          дизайн визитки
        </a>
        <button
          className={(style.navBtn, style.navCloseBtn)}
          onClick={showNavbar}
        >
          <div>x</div>
        </button>
      </nav>
      <button className={style.navBtn} onClick={showNavbar}>
        <div>=</div>
      </button>
    </header>
  );
}
