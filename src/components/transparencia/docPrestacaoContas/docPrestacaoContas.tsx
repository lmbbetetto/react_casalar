import { BtnBack } from "../../component/buttonBack/back";
import style from "./style.module.css";
import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardDocs } from "../../component/card-docs/card-docs";

export function DocPrestacaoContas() {
  const cards = [
    {
      title: "2022",
      link: "/documentos-2022",
    },
    {
      title: "2023",
      link: "/documentos-2023",
    },
    {
      title: "2024",
      link: "/documentos-2024",
    },
    {
      title: "2025",
      link: "/documentos-2025",
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Documentos Prestação de Contas</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/transparencia" />
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
            <CardDocs key={index} link={card.link} title={card.title} />
          ))}
        </div>
      </div>
    </>
  );
}
