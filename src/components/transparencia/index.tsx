import style from "./style.module.css";

import imgFundo from "../../assets/fundo-transparencia.png";
import { CardDocs } from "../component/card-docs/card-docs";

export function Transparencia() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Transparência</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>
      <div className={style.container}>
        <h1 className={style.textoPrincipal}>
          A <span className={style.textoPrincipalGreen}>Casa Lar</span>, tem a
          <span className={style.textoPrincipalGreen}> transparência </span>
          como um princípio, por isso, disponibilizamos nossos{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios com o poder público
          </span>
          !
        </h1>
        <div className={style.cards}>
          <CardDocs link="/docassociacao" title="Documentos Associação" />
          <CardDocs link="/docprestacaocontas" title="Prestação de Contas" />
        </div>
      </div>
    </>
  );
}
