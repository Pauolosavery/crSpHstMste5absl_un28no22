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
            <span className={style.title}>html, css</span>
            <span className={style.line} />
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className={style.single}>
          <span className={style.circle} />
          <span className={style.rectengle} />
          <h3>
            <span className={style.title}>html, css</span>
            <span className={style.line} />
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
