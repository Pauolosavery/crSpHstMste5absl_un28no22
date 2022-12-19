import style from "./Home.module.css";
export default function Home() {
  return (
    <section className={style.home}>
      <a name="Home" />
      <div className={style.logo}>
        <img src="../../img/icons/PS.svg" alt="" />
      </div>
      <div className={style.greeting} name="top">
        <h2>
          Привет! <p>Это Павел</p>
        </h2>
        <h4>Fullstack JavaScript developer</h4>
      </div>
      <div></div>
      <div>
        <h4 className={style.sendOffer}>
          отправить оффер
          <div className={style.offerIco} />
        </h4>
      </div>
      <div className={style.js_bk}>JS</div>
      <div className={style.more}>
        <a href="#About">← ОБО МНЕ</a>
      </div>
      <div className={style.photo} />
      <div className={style.social}>
        <ul>
          <ol>
            <a
              className={style.cv}
              href="/files/CV_Fullstack_Pavel.Plekhanov.txt"
              download
            >
              CV
            </a>
          </ol>
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
    </section>
  );
}
