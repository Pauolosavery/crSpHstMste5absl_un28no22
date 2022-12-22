import style from "./About.module.css";
export default function About() {
  return (
    <section className={style.about}>
      <a name="About" />
      <div className={style.about__wrapper}>
        <h3>Обо мне</h3>
        <p>Я на пути к успеху в разработке</p>
      </div>
    </section>
  );
}
