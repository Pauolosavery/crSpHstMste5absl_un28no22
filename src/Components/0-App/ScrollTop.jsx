import style from "./ScrollTop.module.css";

export default function ScrollTop() {
  return (
    <a href="#Home" >
        <div className={style.scroll__top}>
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-up"
            class="svg-inline--fa fa-angle-up fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path
            fill="currentColor"
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
            ></path>
        </svg>
        </div>
    </a>
  );
}
