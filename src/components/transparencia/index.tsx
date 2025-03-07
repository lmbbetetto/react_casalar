import style from "./style.module.css";

import imgFundo from "../../assets/fundo-transparencia.png";
import { CardDocs } from "../component/card-docs/card-docs";
import { CardTransparencia } from "./card-transparencia";
import { IoDocumentOutline } from "react-icons/io5";

export function Transparencia() {
  const cards = [
    {
      title: "Documentos Associação",
      link: "/transparencia/documentos-associacao",
      newTab: false,
    },
    {
      title: "Prestação de Contas",
      link: "/transparencia/prestacao-contas",
      newTab: false,
    },
  ];
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
          {cards.map((card, index) => (
            <CardTransparencia
              key={index}
              link={card.link}
              title={card.title}
              newTab={card.newTab}
              icon={<IoDocumentOutline />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
