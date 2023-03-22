import style from "./OneSite.module.css";
export default function OneSite({ site, pos }) {
  return (
    <div className={style.single__portfolio}>
        <a href="#Portfolio">
      <div className={style.img__area}>
          <img
            src={require(`../../images/icons/${site.img}`)}
            alt={`${site.title}`}
          />
      </div>
        </a>
      <span className={style.number}>{`0${pos}`}</span>
      <div className={style.portfolio__content}>
        <h2 className={style.portfolio__title}>{site.title}</h2>
        <h3 className={style.portfolio__myposition}>{site.position}</h3>
        <p className={style.portfolio__stack}>{site.stack}</p>
        <p className={style.portfolio__discription}>{site.discription}</p>
        <a className={style.portfolio__single__link} href="#Home">
          Посетить
        </a>
      </div>
    </div>
  );
}
