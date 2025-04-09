import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import PDF1 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/TF-01-2022.pdf";
import PDF2 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/TA-07-2024.pdf";
import PDF13 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/2-quad-RP10-Estadual-2024.pdf";
import PDF14 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/Anual-RP10-Estadual-2024.pdf";
import PDF15 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/Estadual-RP-10-1-Quadr.pdf";
import PDF16 from "../../../../assets/transparencia/2024/TF-01-2022-TA-07-2024/TA-58-2024.pdf";

import PDF3 from "../../../../assets/transparencia/2024/TF-01-2024/TF-01-2024.pdf";
import PDF20 from "../../../../assets/transparencia/2024/TF-01-2024/Anual RP 10.pdf";
import PDF21 from "../../../../assets/transparencia/2024/TF-01-2024/1º quad juntos.pdf";
import PDF22 from "../../../../assets/transparencia/2024/TF-01-2024/RP 10 Emenda.pdf";

import PDF4 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/TF-02-2022.pdf";
import PDF5 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/TA-08-2024.pdf";
import PDF17 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/1º quad RP 10 acolh munic 2024.pdf";
import PDF18 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/2º quad RP 10 acolh munic 2024.pdf";
import PDF19 from "../../../../assets/transparencia/2024/TF-02-2022-TA-08-2024/Anual RP 10 acolh munic 2024.pdf";

import PDF6 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/TF-03-2022.pdf";
import PDF7 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/TA-09-2024.pdf";
import PDF23 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/RP 10 - 1º quad.pdf";
import PDF24 from "../../../../assets/transparencia/2024/TF-03-2022-TA-09-2024/RP 10 - 2º quad.pdf";

import PDF8 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/TF-04-2022.pdf";
import PDF9 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/TA-10-2024.pdf";
import PDF25 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/RP 10 - 1º - CARA.pdf";
import PDF26 from "../../../../assets/transparencia/2024/TF-04-2022-TA-10-2024/RP 10 - 2º - CARA.pdf";

import PDF10 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/TF-05-2022.pdf";
import PDF11 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/TA-11-2024.pdf";
import PDF27 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/RP 10 corrigido.pdf";
import PDF28 from "../../../../assets/transparencia/2024/TF-05-2022-TA-11-2024/Federal 2º quad RP 10.pdf";

import PDF12 from "../../../../assets/transparencia/2024/TF-11-2024/TF-11-2024.pdf";
import { MdOutlinePictureAsPdf } from "react-icons/md";

export function Doc2024() {
  const documents2024 = [
    {
      name: "TF 01/2022 | TA 07/2024 | TA 58/2024",
      documents: [
        {
          title: "TF 01/2022",
          link: PDF1,
        },
        {
          title: "TA 07/2024",
          link: PDF2,
        },
        {
          title: "TA 58/2024",
          link: PDF16,
        },
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF15,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF13,
        },
        {
          title: "RP-10 - Anual",
          link: PDF14,
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
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF21,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF22,
        },
        {
          title: "RP-10 - Anual",
          link: PDF20,
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
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF17,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF18,
        },
        {
          title: "RP-10 - 3 Quadrimestre",
          link: PDF19,
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
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF23,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF24,
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
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF25,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF26,
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
        {
          title: "RP-10 - 1 Quadrimestre",
          link: PDF27,
        },
        {
          title: "RP-10 - 2 Quadrimestre",
          link: PDF28,
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
        <BtnBack link="/transparencia/prestacao-contas" />
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
                  icon={<MdOutlinePictureAsPdf />}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
