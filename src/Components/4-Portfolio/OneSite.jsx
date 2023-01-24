import style from "./OneSite.module.css";
export default function OneSite({ site }) {
  return (
    <div className={style.single}>
      <img scr="./one_site.jpg" alt={`${site.title}`} />
      <h3>{site.title}</h3>
      <h4>{site.position}</h4>
      <div>
        <text>{site.stack}</text>
      </div>
    </div>
  );
}
