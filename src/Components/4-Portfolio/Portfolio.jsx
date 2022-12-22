import style from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <section className={style.portfolio}>
      <a name="Portfolio" />
      <h2 className={style.section__title}>Мои проекты</h2>
      <ol type="I">
        <li>Пиццерия (онлайн заказ еды)</li>
        <p>Fullstack</p>
        <p>
          nodejs, PostgreSQL, React, redux, react-redux, thunk, MUI,
          cloudpayments
        </p>
        <li>Приватные деловые кабины (SPA)</li>
        <p>Fullstack vanilla</p>
        <p>nodejs, PostgreSQL, JS, HTML, Bootstrap</p>
        <li>StarWars API</li>
        <p>Fullstack vanilla</p>
        <p>nodejs, PostgreSQL, JS, HTML, Bootstrap</p>
        <li>Pokemon API</li>
        <p>POKEMON</p>
        <p>StarWars</p>
      </ol>
    </section>
  );
}
