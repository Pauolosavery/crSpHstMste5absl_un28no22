import style from "./SingleSkill.module.css";

export default function SingleSkill({ s, index }) {
  let index1 = Number(index) % 2;
  return (
    <div
      className={`${style.single__skill} ${
        index1 ? style.single__transform : null
      }`}
    >
      <div
        className={`${style.circleRectangle}
        ${index1 ? style.left__orient : style.right__orient}`}
      >
        <span className={style.circle} />
        <span className={style.rectengle} />
      </div>
      <h3>
        <span className={style.title}>{s.title}</span>
        <span className={style.line} />
      </h3>
      <p>{s.text}</p>
    </div>
  );
}
