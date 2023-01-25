import style from "./About.module.css";
export default function About() {
  return (
    <section className={style.about}>
      <a name="About" />
      <div className={style.overlay} />
      <div className={style.about__shape}>
        <img
          src={require("../../img/icons/about-shape.png")}
          alt="O"
          className={style.shape}
        />
        <span className={style.circle1} />
      </div>
      <div className={style.about__container}>
        <img
          src={require("../../img/icons/dot-texture-horizontal.png")}
          alt="..."
          className={style.dot__pattern}
        />
        <span className={style.about__img1} />
        <div className={style.about__content}>
          <h2>
            Рад знакомству! Надеюсь Вам понравились мои проекты. На текущий
            момент Я открыт к предложениям о работе.
          </h2>
          <h5>
            Мечтаю найти команду с которой будет легко коммуницировать и
            работать из любой точки планеты.
          </h5>
          <span className={style.about__img2} />
        </div>
      </div>
    </section>
  );
}
