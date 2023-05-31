import "./styles.css";
import imgFundo from "../../assets/fundo_home.jpg";

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="img_fundo">
        <img src={imgFundo} alt="Imagem de fundo" className="imgHome" />
      </div>
      <div className="sobreHome"></div>

      <section className="sobre2Home">
        <div className="internaHome">
          <h1>Notícias</h1>
          <p>Confira as ultimas notícias da Casa Lar.</p>
          <div className="botao">
            <Link to="/noticias"><button className="btn-conf">Confira</button></Link>
          </div>
        </div>
        <div className="internaHome"></div>
      </section>
    </>
  );
}