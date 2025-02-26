import { BtnBack } from "../../component/buttonBack/back";
import { CardTransparencia } from "../cardTransparencia";
import style from "./style.module.css";
import imgFundo from "../../../assets/fundo-transparencia.png";

import PDF1 from "../../../assets/transparencia/documentosAssociacao/ASSOCIACAO CASA LAR - BP 2022_ASSINADO.pdf";
import PDF2 from "../../../assets/transparencia/documentosAssociacao/ATA ALTERAÇÃO E CONSOLIDAÇÃO 10º ESTATUTO - nov 2022.pdf";
import PDF3 from "../../../assets/transparencia/documentosAssociacao/Ata eleição e posse 2023 2024.pdf";
import PDF4 from "../../../assets/transparencia/documentosAssociacao/TERMO DE POSSE ANO 2023.2024.pdf";

export function DocAssociacao() {
  const documents = [
    {
      title: "Balanço Patrimonial",
      link: PDF1,
    },
    {
      title: "Ata Alteração e Consolidação 10º Estatuto",
      link: PDF2,
    },
    {
      title: "Ata Eleição e Posse - 2023 e 2024",
      link: PDF3,
    },
    {
      title: "Termo de Posse - 2023 e 2024",
      link: PDF4,
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Documentos Associação</h1>
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
          {documents.map((component, index) => (
            <CardTransparencia
              key={index}
              title={component.title}
              link={component.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
