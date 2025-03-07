import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../cardTransparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import PDF1 from "../../../../assets/transparencia/2025/TA-06-2025.pdf";
import PDF2 from "../../../../assets/transparencia/2025/TA-07-2025.pdf";
import PDF3 from "../../../../assets/transparencia/2025/TF-01-2022.pdf";
import PDF4 from "../../../../assets/transparencia/2025/TF-05-2022.pdf";

export function Doc2025() {
  const documents2025 = [
    {
      name: "Colaboradores e Diretoria",
      documents: [
        {
          title: "Diretoria",
          link: "/diretoria",
          newTab: false,
        },
        {
          title: "Colaboradores",
          link: "/colaboradores",
          newTab: false,
        },
      ],
    },
    {
      name: "TF 01/2022",
      documents: [
        {
          title: "TF 01/2022",
          link: PDF3,
          newTab: true,
        },
      ],
    },
    {
      name: "TF 05/2022",
      documents: [
        {
          title: "TF 05/2022",
          link: PDF4,
          newTab: true,
        },
      ],
    },
    {
      name: "TA 06/2025",
      documents: [
        {
          title: "TA 06/2025",
          link: PDF1,
          newTab: true,
        },
      ],
    },
    {
      name: "TA 07/2025",
      documents: [
        {
          title: "TA 07/2025",
          link: PDF2,
          newTab: true,
        },
      ],
    },
  ];

  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2025</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/docprestacaocontas" />
        <h1 className={style.textoPrincipal}>
          A <span className={style.textoPrincipalGreen}>Casa Lar</span>, tem a
          <span className={style.textoPrincipalGreen}> transparência </span>
          como um princípio, por isso, disponibilizamos nossos{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios com o poder público
          </span>
          !
        </h1>
        {documents2025.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.name}</h1>
            <div className={style.cards}>
              {group.documents.map((document, docIndex) => (
                <CardTransparencia
                  key={`${groupIndex}-${docIndex}`}
                  title={document.title}
                  link={document.link}
                  newTab={document.newTab}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
