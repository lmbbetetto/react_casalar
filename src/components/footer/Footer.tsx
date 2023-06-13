import "./styles.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export function Footer() {
  return (
    <>
      <div className="container_footer">
        <Link to="/"><img src={logo} alt="Logo Casa Lar" className="logo_footer" /></Link>
        <div>
          <nav className="menu_footer">
            <ul>
              <Link to="/"><li>Início</li></Link>
              <Link to="/sobre"><li>Sobre</li></Link>
              <Link to="/transparencia"><li>Transparência</li></Link>
              <Link to="/noticias"><li>Notícias</li></Link>
              <Link to="/contato"><li>Contato</li></Link>
            </ul>
          </nav>
        </div>

        <div className='socials'>
          <a href="https://www.facebook.com/profile.php?id=100008390238048" target="_blank"><BsFacebook /></a>
          <a href="https://www.instagram.com/projeto.cara/" target="_blank"><BsInstagram /></a>
        </div>

      </div>

      <div className="copy">
        <small>
          &copy; Assiciação Casa Lar | Todos os direitos reservados.
        </small>
      </div>
      <div className="copy">
        <small>
          Desenvolvido por{" "}
          <a href="https://www.leonardobetetto.dev" target="_blank">
            Leonardo Betetto
          </a>
        </small>
      </div>
    </>
  );
}
