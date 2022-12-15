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
        <h4 className={style.greeting_1}>Fullstack JavaScript developer</h4>
      </div>
      <div>
        <h4 className={style.sendOffer}>отправить оффер
        <div className={style.offerIco}/>
        </h4>
      </div>
      <div className={style.js_bk}>JS</div>
      <div className={style.more}>← ОБО МНЕ</div>
      <div className={style.photo}> МОЁ ФОТО</div>
      <div className={style.social}>
        <ul>
          {/* <ol> */}
            {/* <div className={style.cv}> */}
              <a href="https://pauolosavery.ru">_____CV</a>
            {/* </div> */}
          {/* </ol> */}
          <ol>
        <div className={style.mail}>MAIL</div>
        </ol>
        <ol>
        <div className={style.telegram}>Telegram</div>
        </ol>
        <ol>
        <div className={style.hh}>hh</div>
          </ol>
        </ul>
      </div>
    </div>
  );
}
