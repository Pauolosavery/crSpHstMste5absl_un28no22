import style from "../2-Home/Home.module.css/";

export default function Arrow({ text }) {
  return (
      <div>
    <label for="name"}>
      <a
        className={`${style.hire__me} ${style.link__default} ${style.animate__me} ${style.animated}`}
      >
        {text}
        <span>
          <img src={require("../../images/arrow-right-white.png")} alt="→" />
        </span>
      </a>
    </label>
    </div>
  );
}
