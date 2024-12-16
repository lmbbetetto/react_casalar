import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../cardTransparencia";
import style from "./style.module.css";

import PDF1 from "../../../../assets/transparencia/2023/TF-01-22-TA-08-23/Parecer conclusivo-aprovação-TF-01-2022.pdf";
import PDF2 from "../../../../assets/transparencia/2023/TF-01-22-TA-08-23/Termo-de-Fomento-01-2022.pdf";
import PDF3 from "../../../../assets/transparencia/2023/TF-01-22-TA-08-23/Termo-Aditivo-08-2023.pdf";

import PDF4 from "../../../../assets/transparencia/2023/TF-02-22-TA-05-23/Parecer-conclusivo-aprovação-TF-02-2022.pdf";
import PDF5 from "../../../../assets/transparencia/2023/TF-02-22-TA-05-23/Termo-Aditivo-05-2023.pdf";
import PDF6 from "../../../../assets/transparencia/2023/TF-02-22-TA-05-23/Termo-de-Fomento-02-2022.pdf";

import PDF7 from "../../../../assets/transparencia/2023/TF-02-23/Parecer-conclusivo-aprovado-TF-02-2023.pdf";
import PDF8 from "../../../../assets/transparencia/2023/TF-02-23/TF-02-23-20-mil-vereadores.pdf";

import PDF9 from "../../../../assets/transparencia/2023/TF-03-23/Parecer-conclusivo-aprovação-TF-03-2023.pdf";
import PDF10 from "../../../../assets/transparencia/2023/TF-03-23/TF-03-23-vereadores-banheiro.pdf";

import PDF11 from "../../../../assets/transparencia/2023/TF-03-23-TA-07-23/Parecer-conclusivo-aprovação-TF-07-2023.pdf";
import PDF12 from "../../../../assets/transparencia/2023/TF-03-23-TA-07-23/Termo-Aditivo-07-2023.pdf";
import PDF13 from "../../../../assets/transparencia/2023/TF-03-23-TA-07-23/Termo-de-Fomento-03-2022.pdf";

import PDF14 from "../../../../assets/transparencia/2023/TF-04-22-TA-06-23/Parecer-conclusivo-aprovação-TF-04-2022.pdf";
import PDF15 from "../../../../assets/transparencia/2023/TF-04-22-TA-06-23/Termo-aditivo-06-2023.pdf";
import PDF16 from "../../../../assets/transparencia/2023/TF-04-22-TA-06-23/termo-de-fomento-04-2022.pdf";

import PDF17 from "../../../../assets/transparencia/2023/TF-05-22-TA-09-23/Parecer-conclusivo-aprovação-TF-05-2022.pdf";
import PDF18 from "../../../../assets/transparencia/2023/TF-05-22-TA-09-23/Termo-Aditivo-09-2023.pdf";
import PDF19 from "../../../../assets/transparencia/2023/TF-05-22-TA-09-23/Termo-de-Fomento-05-2022.pdf";

import PDF20 from "../../../../assets/transparencia/2023/TF-05-23/Parecer-conclusivo-aprovação-TF-05-2023.pdf";
import PDF21 from "../../../../assets/transparencia/2023/TF-05-23/TF-05-23-computadores.pdf";

import PDF22 from "../../../../assets/transparencia/2023/TF-11-2023/Parecer-conclusivo-aprovação-TF-11-2023.pdf";
import PDF23 from "../../../../assets/transparencia/2023/TF-11-2023/TF-11-2023.pdf";

import PDF24 from "../../../../assets/transparencia/2023/TF-14-23/Parecer-conclusivo-TF-14-2023.pdf";
import PDF25 from "../../../../assets/transparencia/2023/TF-14-23/TF-14-23-CASA-LAR-completo.pdf";

export function Doc2023() {
  const TF_01_22_TA_08_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF1,
    },
    {
      title: "Termo de Fomento",
      link: PDF2,
    },
    {
      title: "Termo de Aditivo",
      link: PDF3,
    },
  ];
  const TF_02_22_TA_05_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF4,
    },
    {
      title: "Termo de Fomento",
      link: PDF6,
    },
    {
      title: "Termo de Aditivo",
      link: PDF5,
    },
  ];
  const TF_02_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF7,
    },
    {
      title: "Termo de Fomento",
      link: PDF8,
    },
  ];
  const TF_03_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF9,
    },
    {
      title: "Termo de Fomento",
      link: PDF10,
    },
  ];
  const TF_03_23_TA_07_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF11,
    },
    {
      title: "Termo de Fomento",
      link: PDF13,
    },
    {
      title: "Termo de Aditivo",
      link: PDF12,
    },
  ];
  const TF_04_22_TA_06_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF14,
    },
    {
      title: "Termo de Fomento",
      link: PDF16,
    },
    {
      title: "Termo de Aditivo",
      link: PDF15,
    },
  ];
  const TF_05_22_TA_09_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF17,
    },
    {
      title: "Termo de Fomento",
      link: PDF19,
    },
    {
      title: "Termo de Aditivo",
      link: PDF18,
    },
  ];
  const TF_05_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF20,
    },
    {
      title: "Termo de Fomento",
      link: PDF21,
    },
  ];
  const TF_11_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF22,
    },
    {
      title: "Termo de Fomento",
      link: PDF23,
    },
  ];
  const TF_14_23 = [
    {
      title: "Parecer Conclusivo",
      link: PDF24,
    },
    {
      title: "Termo de Fomento",
      link: PDF25,
    },
  ];
  return (
    <>
      <div className={style.container}>
        <BtnBack link="/docprestacaocontas" />
        <div className={style.titulo}>
          <h1>Documentos 2023</h1>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 01/2022 | TA 08/2023</h1>
          <div className={style.cards}>
            {TF_01_22_TA_08_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 02/2022 | TA 05/2023</h1>
          <div className={style.cards}>
            {TF_02_22_TA_05_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 02/2023</h1>
          <div className={style.cards}>
            {TF_02_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 03/2023</h1>
          <div className={style.cards}>
            {TF_03_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 03/2023 | TA 07/2023</h1>
          <div className={style.cards}>
            {TF_03_23_TA_07_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 04/2022 | TA 06/2023</h1>
          <div className={style.cards}>
            {TF_04_22_TA_06_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 05/2022 | TA 09/2023</h1>
          <div className={style.cards}>
            {TF_05_22_TA_09_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 05/2023</h1>
          <div className={style.cards}>
            {TF_05_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 11/2023</h1>
          <div className={style.cards}>
            {TF_11_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 14/2023</h1>
          <div className={style.cards}>
            {TF_14_23.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
