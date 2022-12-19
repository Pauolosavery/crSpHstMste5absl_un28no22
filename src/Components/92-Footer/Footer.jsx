import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div>&copy; Pauolosavery</div>
      <div>2022</div>
      <div>
        Вдохновлён{" "}
        <a href="https://demo.themecon.net/onlyme/html/index-3.html#">Belal</a>
      </div>
    </div>
  );
}
