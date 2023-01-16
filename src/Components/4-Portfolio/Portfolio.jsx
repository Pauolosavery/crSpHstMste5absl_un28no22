import OneSite from "./OneSite";
import style from "./Portfolio.module.css";
import projects from "./projects";

export default function Portfolio() {
  return (
    <section className={style.portfolio}>
      <a name="Portfolio" />
      <div className={style.container}>
        <h2 className={style.section__title}>мои проекты</h2>
        <ol>
          {projects.map((site, i) => (
            <li>
              <OneSite site={site} id={Math.random()} pos={i} />
              <a>{i}</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
