import "./Footer.css";

function Footer() {
  return (
    <footer className="footer html__centered">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__items">
        <p className="footer__copyright">© 2024</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/filippovdo"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
