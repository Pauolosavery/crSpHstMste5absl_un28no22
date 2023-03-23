import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <a name="Home">{null}</a>
      <span className={`${style.vertical__line} ${style.line1}`} />
      <span className={`${style.vertical__line} ${style.line2}`} />
      <span className={`${style.vertical__line} ${style.line3}`} />
      <span className={`${style.vertical__line} ${style.line4}`} />
      <span className={`${style.vertical__line} ${style.line5}`} />
      <section className={`${style.hero__section} ${style.pos__relative}`}>
        <div className={style.overlay}></div>
        <div className={style.hero__image__wrapper}>
          <span
            className={`${style.hero__image} ${style.animate__me} ${style.animated}`}
          />
          <img
            src={require("../../images/dot-texture.png")}
            alt="texture"
            className={`${style.dot__texture} ${style.animate__me} ${style.animated}`}
          />
        </div>
        <a href="#Skill">
          <span
            className={`${style.scroll__down} ${style.animate__me} ${style.animated}`}
            id="scroll__me"
          >
            ПОДРОБНЕЕ{" "}
            <img src={require("../../images/scroll-down-arrow.png")} alt="↓" />
          </span>
        </a>
        <div className={style.container}>
          <div className={style.content__wrapper}>
            <div className={style.hero__content}>
              <h1 className={`${style.animate__me} ${style.animated}`}>
                Привет! Это Павел!
              </h1>
              <h2 className={`${style.animate__me} ${style.animated}`}>
                JavaScript fullstack developer
              </h2>
              <label for="name">
                <a
                  className={`${style.hire__me} ${style.link__default} ${style.animate__me} ${style.animated}`}
                >
                  Написать
                  <span>
                    <img
                      src={require("../../images/arrow-right-white.png")}
                      alt="→"
                    />
                  </span>
                </a>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
