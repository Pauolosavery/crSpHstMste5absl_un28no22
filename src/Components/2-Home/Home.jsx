import style from "./Home.module.css";
export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.logo}>
        <img src="../../img/icons/PS.svg" alt="" />
      </div>
      <div className={style.greeting} name="top">
        <h2>Привет! Это Павел</h2>
      </div>
      <div>
        <h3 className={style.greeting_1}>Fullstack JavaScript developer</h3>
      </div>
      <div className={style.js_bk}>JS</div>
      <div className={style.more}>← ОБО МНЕ</div>
      <div className={style.photo}> МОЁ ФОТО</div>
      <div className={style.social}>
        <div className={style.cv}>CV</div>
        <div className={style.mail}>MAIL</div>
        <div className={style.telegram}>Telegram</div>
        <div className={style.hh}>hh</div>
      </div>
    </div>
  );
}
