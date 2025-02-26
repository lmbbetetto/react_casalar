import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../cardTransparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import PDF1 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/TF-01-2022.pdf";
import PDF2 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/TA-07-2024.pdf";

import PDF3 from "../../../../assets/transparencia/2024/TF-01-2024/TF-01-2024.pdf";

import PDF4 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/TF-02-2022.pdf";
import PDF5 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/TA-08-2024.pdf";

import PDF6 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/TF-03-2022.pdf";
import PDF7 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/TA-09-2024.pdf";

import PDF8 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/TF-04-2022.pdf";
import PDF9 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/TA-10-2024.pdf";

import PDF10 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/TF-05-2022.pdf";
import PDF11 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/TA-11-2024.pdf";

import PDF12 from "../../../../assets/transparencia/2024/TF-11-2024/TF-11-2024.pdf";

export function Doc2024() {
  const documents2024 = [
    {
      name: "TF 01/2022 | TA 07/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF1,
        },
        {
          title: "Termo de Aditivo",
          link: PDF2,
        },
      ],
    },
    {
      name: "TF 01/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF3,
        },
      ],
    },
    {
      name: "TF 02/2022 | TA 08/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF4,
        },
        {
          title: "Termo de Aditivo",
          link: PDF5,
        },
      ],
    },
    {
      name: "TF 03/2022 | TA 09/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF6,
        },
        {
          title: "Termo de Aditivo",
          link: PDF7,
        },
      ],
    },
    {
      name: "TF 04/2022 | TA 10/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF8,
        },
        {
          title: "Termo de Aditivo",
          link: PDF9,
        },
      ],
    },
    {
      name: "TF 05/2022 | TA 11/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF10,
        },
        {
          title: "Termo de Aditivo",
          link: PDF11,
        },
      ],
    },
    {
      name: "TF 11/2024",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF12,
        },
      ],
    },
  ];

  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2024</h1>
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

        {documents2024.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.name}</h1>
            <div className={style.cards}>
              {group.documents.map((document, docIndex) => (
                <CardTransparencia
                  key={`${groupIndex}-${docIndex}`}
                  title={document.title}
                  link={document.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
