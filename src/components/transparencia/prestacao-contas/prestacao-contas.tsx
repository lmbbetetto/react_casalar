import { BtnBack } from "../../component/buttonBack/back";
import style from "./style.module.css";
import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardTransparencia } from "../card-transparencia";
import { IoDocumentOutline } from "react-icons/io5";

export function DocPrestacaoContas() {
  const cards = [
    {
      title: "2022",
      link: "/transparencia/prestacao-contas/documentos-2022",
      newTab: false,
    },
    {
      title: "2023",
      link: "/transparencia/prestacao-contas/documentos-2023",
      newTab: false,
    },
    {
      title: "2024",
      link: "/transparencia/prestacao-contas/documentos-2024",
      newTab: false,
    },
    {
      title: "2025",
      link: "/transparencia/prestacao-contas/documentos-2025",
      newTab: false,
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
        <h1 className={style.textoPrincipal}>
          A <span className={style.textoPrincipalGreen}>Casa Lar</span>, tem a
          <span className={style.textoPrincipalGreen}> transparência </span>
          como um princípio, por isso, disponibilizamos nossos{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios com o poder público
          </span>
          !
        </h1>
        <BtnBack link="/transparencia" />
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
