import "./styles.css";
import imgFundo from "../../assets/fundo_home.jpg";

import { Link } from 'react-router-dom'
import { CardNoticia } from "../cardNoticia";

export function Home() {
  return (
    <>
      <div className="img_fundo">
        <img src={imgFundo} alt="Imagem de fundo" className="imgHome" />
      </div>
      <div className="sobreHome"></div>

      <section className="sobre2Home">
        <div className="internaHome">
          <div className="titulo">
            <h1>Últimas notícias</h1>
          </div>
          <div className="cards">
            <CardNoticia />
            <CardNoticia />
            <CardNoticia />
            <CardNoticia />
            <CardNoticia />
          </div>
        </div>
      </section>
    </>
  );
}