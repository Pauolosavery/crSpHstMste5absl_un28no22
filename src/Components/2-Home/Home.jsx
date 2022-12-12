import NavBar from '../1-NavBar/NavBar.jsx'
import style from "./Home.module.css";
export default function Home() {
  return (
  <div className={style.home}>
    <NavBar>
    <div> LOGO</div>
    </NavBar>
    <div> Привет! Я Павел.</div>
    <div> Fullstack JavaScript developer</div>
    <div> Мой стек</div>
    <div> ПОДРОБНЕЕ</div>
    <div> МОЁ ФОТО</div>
    <div> СОЦ СЕТИ</div>
  </div>
  )
}
