import style from "./SingleSkill.module.css";

export default function SingleSkill({ s, index }) {
  let index1 = Number(index) % 2;
  let singleSkillTransform = "translate(0, 80px)";
  return (
    // <div
    //   className={`${style.single__skill} ${
    //     index1 ? style.left__point : style.right__point
    //   }`}
    // >
    <div
      className={`${style.single__skill}`}
      style={index1 ? { transform: singleSkillTransform } : null}
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
