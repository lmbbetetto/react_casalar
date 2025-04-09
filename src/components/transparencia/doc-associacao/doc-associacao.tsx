import { BtnBack } from "../../component/buttonBack/back";
import { CardTransparencia } from "../card-transparencia";
import style from "./style.module.css";
import imgFundo from "../../../assets/fundo-transparencia.png";

import PDF1 from "../../../assets/transparencia/documentosAssociacao/ASSOCIACAO CASA LAR - BP 2022_ASSINADO.pdf";
import PDF2 from "../../../assets/transparencia/documentosAssociacao/estatuto 12ª alteração.pdf";
import PDF3 from "../../../assets/transparencia/documentosAssociacao/ata.pdf";
import PDF4 from "../../../assets/transparencia/documentosAssociacao/Cadastro membros diretoria 25.26.pdf";
import { MdOutlinePictureAsPdf } from "react-icons/md";

export function DocAssociacao() {
  const documents = [
    {
      title: "Balanço Patrimonial",
      link: PDF1,
    },
    {
      title: "Ata Alteração e Consolidação 12º Estatuto",
      link: PDF2,
    },
    {
      title: "Ata Eleição e Posse - 2025 e 2026",
      link: PDF3,
    },
    {
      title: "Termo de Posse - 2025 e 2026",
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
              icon={<MdOutlinePictureAsPdf />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
