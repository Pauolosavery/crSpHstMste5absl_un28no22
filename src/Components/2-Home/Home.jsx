import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <a name="Home" />
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
        <ul className={style.social__icon}>
          <li className={style.facebook}>
            <a href="" title="Facebook" target="_blank">
              <svg
                aria__hidden="true"
                focusable="false"
                data__prefix="fab"
                data__icon="facebook__f"
                className={`${style.svg__inline__fa} ${style.fa__facebook__f} ${style.fa__w__10}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22__92.66h__88.91v__60.13c0__25.35 12.42__50.06 52.24__50.06h40.42V6.26S260.43 0 225.36 0c__73.22 0__121.08 44.38__121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="twitter">
            <a href="" title="Twitter" target="_blank">
              <svg
                aria__hidden="true"
                focusable="false"
                data__prefix="fab"
                data__icon="twitter"
                className={`${style.svg__inline__fa} ${style.fa__twitter} ${style.fa__w__16}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72__105.583 298.558__298.558 298.558__59.452 0__114.68__17.219__161.137__47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213__16.568 130.274__44.832__46.132__.975__84.792__31.188__98.112__72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843__1.3 27.614__3.573__48.081__9.747__84.143__51.98__84.143__102.985v__1.299c13.969 7.797 30.214 12.67 47.431 13.319__28.264__18.843__46.781__51.005__46.781__87.391 0__19.492 5.197__37.36 14.294__52.954 51.655 63.675 129.3 105.258 216.365 109.807__1.624__7.797__2.599__15.918__2.599__24.04 0__57.828 46.782__104.934 104.934__104.934 30.213 0 57.502 12.67 76.67 33.137 23.715__4.548 46.456__13.32 66.599__25.34__7.798 24.366__24.366 44.833__46.132 57.827 21.117__2.273 41.584__8.122 60.426__16.243__14.292 20.791__32.161 39.308__52.628 54.253z"
                ></path>
              </svg>
            </a>
          </li>
          <li className={style.linkedin}>
            <a href="" title="Linkedin" target="_blank">
              <svg
                aria__hidden="true"
                focusable="false"
                data__prefix="fab"
                data__icon="linkedin__in"
                className={`${style.svg__inline__fa} ${style.fa__linkedin__in} ${style.fa__w__14}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7__24.1 54.3__53.79 54.3zM447.9 448h__92.68V302.4c0__34.7__.7__79.2__48.29__79.2__48.29 0__55.69 37.7__55.69 76.7V448h__92.78V148.9h89.08v40.8h1.3c12.4__23.5 42.69__48.3 87.88__48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </li>
          <li className={style.instagram}>
            <a href="" title="Instagram" target="_blank">
              <svg
                aria__hidden="true"
                focusable="false"
                data__prefix="fab"
                data__icon="instagram"
                className={`${style.svg__inline__fa} ${style.fa__instagram} ${style.fa__w__14}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c__63.6 0__114.9 51.3__114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c__41.1 0__74.7__33.5__74.7__74.7s33.5__74.7 74.7__74.7 74.7 33.5 74.7 74.7__33.6 74.7__74.7 74.7zm146.4__194.3c0 14.9__12 26.8__26.8 26.8__14.9 0__26.8__12__26.8__26.8s12__26.8 26.8__26.8 26.8 12 26.8 26.8zm76.1 27.2c__1.7__35.9__9.9__67.7__36.2__93.9__26.2__26.2__58__34.4__93.9__36.2__37__2.1__147.9__2.1__184.9 0__35.8 1.7__67.6 9.9__93.9 36.1s__34.4 58__36.2 93.9c__2.1 37__2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9__1.7 67.7__9.9 93.9__36.2 26.2__26.2 34.4__58 36.2__93.9 2.1__37 2.1__147.8 0__184.8zM398.8 388c__7.8 19.6__22.9 34.7__42.6 42.6__29.5 11.7__99.5 9__132.1 9s__102.7 2.6__132.1__9c__19.6__7.8__34.7__22.9__42.6__42.6__11.7__29.5__9__99.5__9__132.1s__2.6__102.7 9__132.1c7.8__19.6 22.9__34.7 42.6__42.6 29.5__11.7 99.5__9 132.1__9s102.7__2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7__9 132.1z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

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
