import style from "./Contacts.module.css";
export default function Contacts() {
  return (
    <section className={style.contacts}>
      <a name="Contact" />
      <form>
        <label>
          Ваш адрес:
        <input type="text" name="name" />
        </label>        
        <label>
          Текст:
        <textarea type="text" name="name" />
        </label>
        <input name="myFile" type="file"/>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
