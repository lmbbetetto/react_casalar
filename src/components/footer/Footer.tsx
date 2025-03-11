import "./styles.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container_footer">
        <Link to="/">
          <img src={logo} alt="Logo Casa Lar" className="logo_footer" />
        </Link>
        <div>
          <nav className="menu_footer">
            <div onClick={scrollToTop}>
              <Link to="/">
                <a>Início</a>
              </Link>
              <Link to="/sobre">
                <a>Sobre</a>
              </Link>
              <Link to="/transparencia">
                <a>Transparência</a>
              </Link>
              <Link to="/noticias">
                <a>Notícias</a>
              </Link>
              <Link to="/contato">
                <a>Contato</a>
              </Link>
            </div>
          </nav>
        </div>

        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=100008390238048"
            target="_blank"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/projetocara.casalar/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>

        <div className="copy">
          <small>
            &copy; Assiciação Casa Lar | Todos os direitos reservados.
          </small>
        </div>
        <div className="copy">
          <small>
            Desenvolvido por{" "}
            <a
              href="https://portfolio-git-main-lmbbetetto.vercel.app/"
              target="_blank"
            >
              Leonardo Betetto
            </a>
          </small>
        </div>
      </div>
    </>
  );
}
