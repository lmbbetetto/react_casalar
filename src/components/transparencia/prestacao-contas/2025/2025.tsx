import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import PDF1 from "../../../../assets/transparencia/2025/TA-06-2025.pdf";
import PDF2 from "../../../../assets/transparencia/2025/TA-07-2025.pdf";
import PDF3 from "../../../../assets/transparencia/2025/TF-01-2022.pdf";
import PDF4 from "../../../../assets/transparencia/2025/TF-05-2022.pdf";

import PDF5 from "../../../../assets/transparencia/2025/TF 02-2022 | TA 08-2025/TF 02.2022.pdf";
import PDF6 from "../../../../assets/transparencia/2025/TF 02-2022 | TA 08-2025/TA 08.2025.pdf";

import PDF7 from "../../../../assets/transparencia/2025/TF 03-2022 | TA 21-2025/TF 03.2022.pdf";
import PDF8 from "../../../../assets/transparencia/2025/TF 03-2022 | TA 21-2025/TA 21.2025.pdf";

import PDF9 from "../../../../assets/transparencia/2025/TF 04-2022 | TA 05-2025/TF 04.2022.pdf";
import PDF10 from "../../../../assets/transparencia/2025/TF 04-2022 | TA 05-2025/TA 05.2025.pdf";

import { MdOutlinePictureAsPdf } from "react-icons/md";

export function Doc2025() {
  const documents2025 = [
    {
      name: "Colaboradores e Diretoria",
      documents: [
        {
          title: "Diretoria",
          link: "/transparencia/prestacao-contas/documentos-2025/diretoria",
          newTab: false,
        },
        {
          title: "Colaboradores",
          link: "/transparencia/prestacao-contas/documentos-2025/colaboradores",
          newTab: false,
        },
      ],
    },
    {
      name: "TF 01/2022 | TA 07/2025",
      documents: [
        {
          title: "TF 01/2022",
          link: PDF3,
          newTab: true,
        },
        {
          title: "TA 07/2025",
          link: PDF2,
          newTab: true,
        },
      ],
    },
    {
      name: "TF 02/2022 | TA 08/2025",
      documents: [
        {
          title: "TF 02/2022",
          link: PDF5,
          newTab: true,
        },
        {
          title: "TA 08/2025",
          link: PDF6,
          newTab: true,
        },
      ],
    },
    {
      name: "TF 03/2022 | TA 21/2025",
      documents: [
        {
          title: "TF 03/2022",
          link: PDF7,
          newTab: true,
        },
        {
          title: "TA 21/2025",
          link: PDF8,
          newTab: true,
        },
      ],
    },
    {
      name: "TF 04/2022 | TA 05/2025",
      documents: [
        {
          title: "TF 04/2022",
          link: PDF9,
          newTab: true,
        },
        {
          title: "TA 05/2025",
          link: PDF10,
          newTab: true,
        },
      ],
    },
    {
      name: "TF 05/2022 | TA 06/2025",
      documents: [
        {
          title: "TF 05/2022",
          link: PDF4,
          newTab: true,
        },
        {
          title: "TA 06/2025",
          link: PDF1,
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
