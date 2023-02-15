import { useRef, useState, useEffect } from "react";
import style from "./ScrollTop.module.css";

export default function ScrollTop() {
  const scrollEl = useRef(null);
  const [top, setTop] = useState(false);
  useEffect(() => {
    window.scrollY < 200 ? setTop(true) : setTop(false);
  }, []);
  window.onscroll = () => {
    // const hasScrolling = !(window.scrollX === 0 && window.scrollY === 0);
    if (window.scrollY < 200) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  return (
    <a href="#Home">
      <div
        className={top ? `${style.off}` : `${style.scroll__top}`}
        ref={scrollEl}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angle-up"
          // class="svg-inline--fa fa-angle-up fa-w-10"
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
