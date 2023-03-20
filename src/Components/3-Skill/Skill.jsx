import style from "./Skill.module.css";
import SingleSkill from "./SingleSkill.jsx";

import skills from "./skill.js";

export default function Skill() {
  return (
    <section className={style.skill}>
      <div className={style.container}>
        <a name="Skill" />
        <h2 className={style.section__title}>мой стек</h2>
        <div className={style.skill__wrapper} id="me-working-skill">
          <span className={style.vertical__line} />
          {skills.map((s, index) => (
            <SingleSkill s={s} id={s.title} index={index} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
