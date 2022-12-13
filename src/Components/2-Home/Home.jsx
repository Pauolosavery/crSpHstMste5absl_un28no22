import style from "./Home.module.css";
export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.logo}>
        <img src="../../img/icons/PS.svg" alt="" />
      </div>
      <div name="top"> Привет! Я Павел.</div>
      <div> Fullstack JavaScript developer</div>
      <div> Мой стек</div>
      <div> ПОДРОБНЕЕ</div>
      <div> МОЁ ФОТО</div>
      <div> СОЦ СЕТИ</div>
    </div>
  );
}
