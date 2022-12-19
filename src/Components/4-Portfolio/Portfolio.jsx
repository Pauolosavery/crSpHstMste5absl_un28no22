import style from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <section className={style.portfolio}>
      <a name="Portfolio" />
      <h3>Мои приложения</h3>
      <ol type="I">
        <li>Пиццерия (онлайн заказ еды)</li>
        <p>Fullstack</p>
        <p>
          nodejs, PostgreSQL, React, redux, react-redux, thunk, MUI,
          cloudpayments
        </p>
        <li>Чат компании</li>
        <p>Fullstack vanilla</p>
        <p>nodejs, PostgreSQL, JS, HTML, Bootstrap</p>
        <li>Чат компании</li>
        <p>Fullstack vanilla</p>
        <p>nodejs, PostgreSQL, JS, HTML, Bootstrap</p>
        <li>API</li>
        <p>POKEMON</p>
        <p>StarWars</p>
      </ol>
    </section>
  );
}
