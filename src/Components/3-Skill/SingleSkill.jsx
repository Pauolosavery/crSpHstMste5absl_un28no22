import style from "./SingleSkill.module.css";

export default function SingleSkill({s}) {
  return (
      <div className={style.single__skill}>
          <span className={style.circle}/>
          <span className={style.rectengle}/>
            <h3>
                <span className={style.title}>{s.title}</span>
                <span className={style.line}/>
            </h3>
            <p>{s.text}</p>
        </div>
  )}