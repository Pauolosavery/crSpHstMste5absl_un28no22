import OneSite from "./OneSite";
import style from "./Portfolio.module.css";
import projects from "./projects";

export default function Portfolio() {
  return (
    <section className={style.portfolio}>
      <a name="Portfolio" />
      <h2 className={style.section__title}>мои проекты</h2>
      <div className={style.container}>
        <ol className={style.wrapper}>
          {projects.map((site, i) => (
            <li>
              <OneSite site={site} id={site.img} pos={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
