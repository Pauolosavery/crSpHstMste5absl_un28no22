import style from "./Contacts.module.css";
import { useState, useRef } from "react";
import { ReactComponent as SendMail } from "../../images/icons/send-mail.svg";

export default function Contacts() {
  const [message, setMessage] = useState({
    userName: undefined,
    email: undefined,
    msg: undefined,
  });
  const sendMessage = () => {
    alert(
      `Ваше сообщение: \n"Имя: ${message.userName}, \n Почта: ${message.email}, \n Сообщение: ${message.msg}",\n отправлено, скоро Я с Вами свяжусь`
    );
    formRef.current.reset();
  };
  const formRef = useRef(null);

  return (
    <section className={style.contacts}>
      <a name="Contact" />
      <div className={style.wrapper}>
        <div className={style.title}>
          <SendMail />
          <h2>На связи</h2>
        </div>
        <div className={style.c__wrapper}>
          <div className={style.adress}>
            <address>
              <span className={style.adress__title}>Проживаю в</span>
              <p className={style.adress__city}>г. Санкт-Петербург</p>
              <span className={style.adress__msg}>Готов к релокации</span>
              <span className={style.adress__email}>E-mail :</span>
              <a
                target="_blank"
                href="mailto:pavel.plekhanov.job@gmail.com"
                rel="noreferrer"
              >
                pavel.plekhanov.job@gmail.com
              </a>
            </address>
          </div>
          <div className={style.form}>
            <form action="POST" ref={formRef}>
              <div className={style.input__name}>
                <label for="name">Имя * </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ваше имя"
                  onChange={(e) =>
                    setMessage({ ...message, userName: e.target.value })
                  }
                />
              </div>
              <div className={style.input__email}>
                <label for="email">Email *</label>
                <a name="Send" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email для связи"
                  onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                  }
                />
              </div>
              <div className={style.input__msg}>
                <label for="message">Сообщение *</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Текст письма"
                  onChange={(e) =>
                    setMessage({ ...message, msg: e.target.value })
                  }
                ></textarea>
              </div>
              <div className={style.input__submit}>
                <button onClick={() => sendMessage()} type="submit">
                  ОТПРАВИТЬ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
