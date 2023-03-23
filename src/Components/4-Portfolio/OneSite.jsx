import style from "./OneSite.module.css";
import styleArrow from "../2-Home/Home.module.css";

export default function OneSite({ site, pos }) {
  return (
    <div className={style.single__portfolio}>
      <a href="#Portfolio" onClick={() => alert("Ссылка в разработке.")}>
        <div className={style.img__area}>
          <img
            src={require(`../../images/icons/${site.img}`)}
            alt={`${site.title}`}
          />
        </div>
      </a>
      <span className={style.number}>{`0${pos}`}</span>
      <div className={style.portfolio__content}>
        <h2 className={style.portfolio__type}>{site.type}</h2>
        <h2 className={style.portfolio__title}>{site.title}</h2>
        <h3 className={style.portfolio__myposition}>
          Позиция: {site.position}
        </h3>
        <p className={style.portfolio__stack}>Стек: {site.stack}</p>
        <p className={style.portfolio__discription}>{site.discription}</p>
        {/* <label for="name">
          <a
            className={style.portfolio__single__link}
            // className={`${styleArrow.hire__me} ${styleArrow.link__default} ${styleArrow.animate__me} ${styleArrow.animated}`}
          >
            Посетить
            <span>
              <img
                src={require("../../images/arrow-right-white.png")}
                alt="→"
              />
            </span>
          </a>
        </label> */}
        {/* <a className={style.portfolio__single__link} href="#Home">
          Посетить
        </a> */}
      </div>
    </div>
  );
}
