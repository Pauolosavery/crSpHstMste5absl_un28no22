import style from "./Skill.module.css";
import skills from "./skill.js";

export default function Skill() {
  return (
    <section className={style.skill}>
      <div className={style.container}>
        <a name="Skill" />
        <span className={style.vertical__line} />
        <h2 className={style.section__title}>My Skills</h2>
        <div className={style.list}>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>{skills[0].title}</span>
              <span className={style.line} />
            </h3>
            <p>{skills[0].text}</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>{skills[1].title}</span>
              <span className={style.line} />
            </h3>
            <p>Photoshop, Illustrator</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>JS</span>
              <span className={style.line} />
            </h3>
            <p>TyprScript, ECMAScript 2022, CodeWars - 6 kyu</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>Nodejs</span>
              <span className={style.line} />
            </h3>
            <p>Linux, Windows, Express, bcrypt, sessions, webSocket</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>React</span>
              <span className={style.line} />
            </h3>
            <p>Class, Hook, API, Solid, KISS</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>Redux</span>
              <span className={style.line} />
            </h3>
            <p>React-redux, React DevTools, Thunk</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>PostgreSQL, mySQL</span>
              <span className={style.line} />
            </h3>
            <p>database, Beekeeper, many-to-many, </p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>Sequelize</span>
              <span className={style.line} />
            </h3>
            <p>database, Beekeeper, many-to-many</p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>Docker</span>
              <span className={style.line} />
            </h3>
            <p></p>
          </div>
          <div className={style.single}>
            <span className={style.circle} />
            <span className={style.rectengle} />
            <h3>
              <span className={style.title}>IDE</span>
              <span className={style.line} />
            </h3>
            <p>VScode, npm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
