import style from "./OneSite.module.css";
export default function OneSite({ site }) {
  return (
    <a className={style.single} href="#Home">
      <div className={style.img__wrapper}>
        <img
          src={require(`../../images/icons/${site.img}`)}
          alt={`${site.title}`}
        />
      </div>
      <div className={style.text}>
        <h2>{site.title}</h2>
        <h3>{site.position}</h3>
        <p>{site.stack}</p>
        <p>{site.discription}</p>
      </div>
    </a>
  );
}
