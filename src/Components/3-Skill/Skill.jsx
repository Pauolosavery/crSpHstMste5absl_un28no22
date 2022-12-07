import style from "./Skill.module.css";
export default function Skill() {
  return (
    <div className={style.skill}>
      <h2>stack</h2>
      <div className={style.list}>
        <div className={style.single}>
          <span className={style.circle} />
          <span className={style.rectengle} />
          <h3>
            <span className={style.title}>HTML, CSS</span>
            <span className={style.line} />
          </h3>
          <p>Tilda, SCSS, Material UI, Fluent UI</p>
        </div>
        <div className={style.single}>
          <span className={style.circle} />
          <span className={style.rectengle} />
          <h3>
            <span className={style.title}>Figma</span>
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
          <p>Class, Hook</p>
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
  );
}
