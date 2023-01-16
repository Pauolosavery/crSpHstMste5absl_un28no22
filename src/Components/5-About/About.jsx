import style from "./About.module.css";
export default function About() {
  return (
    <section className={style.about}>
      <a name="About" />
      <div className={style.about__wrapper}>
        <h2 className={style.section__title}>Обо мне</h2>
        <p>
          Ищу лёгкую в общении команду с которой можно выполнять проекты
          удалённо. Прошу не присылать тестовые задания с требованием DDD
          паттернов ;)
        </p>
      </div>
    </section>
  );
}
