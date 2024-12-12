import { BtnBack } from "../../../component/buttonBack/back";
import { CardTransparencia } from "../../cardTransparencia";
import style from "./style.module.css";

// TF01_2022
import PDF1 from "../../../../assets/transparencia/2022/TF01_2022/Estadual - RP 10 3º quadr..pdf";
import PDF2 from "../../../../assets/transparencia/2022/TF01_2022/Estadual - Relação despesas 3º quadr..pdf";

// TF02_2022
import PDF3 from "../../../../assets/transparencia/2022/TF02_2022/RP 10 - 3º QUAD. Acolh. Municipal.pdf";
import PDF4 from "../../../../assets/transparencia/2022/TF02_2022/Relação despesas - 3º quad. Acolh. Municipal.pdf";

// TF03_2022
import PDF5 from "../../../../assets/transparencia/2022/TF03_2022/Aprendizes - RP 10 3º quadr..pdf";
import PDF6 from "../../../../assets/transparencia/2022/TF03_2022/Aprendizes - relação despesas 3º quadr..pdf";

// TF04_2022
import PDF7 from "../../../../assets/transparencia/2022/TF04_2022/CARA - RP 10 3º quadr..pdf";
import PDF8 from "../../../../assets/transparencia/2022/TF04_2022/CARA - Relação das despesas 3º quadr..pdf";

// TF05_2022
import PDF9 from "../../../../assets/transparencia/2022/TF05_2022/Federal - RP 10 3º quadr..pdf";
import PDF10 from "../../../../assets/transparencia/2022/TF05_2022/Federal - Relação despesas 3º quadr..pdf";

// TF07_2022
import PDF11 from "../../../../assets/transparencia/2022/TF07_2021/72 mil - Emenda RP 10 3º quadr..pdf";
import PDF12 from "../../../../assets/transparencia/2022/TF07_2021/72 mil - Relação despesas 3º quadr..pdf";

// TF21_2022
import PDF13 from "../../../../assets/transparencia/2022/TF21_2022/18 mil - Emenda RP10 3º quadr..pdf";
import PDF14 from "../../../../assets/transparencia/2022/TF21_2022/18 mil - Emenda relação despesas 3º quadr..pdf";

// TF22_2022
import PDF15 from "../../../../assets/transparencia/2022/TF22_2022/27 MIL - Emenda RP 10 3º quadr..pdf";
import PDF16 from "../../../../assets/transparencia/2022/TF22_2022/27 mil - Emenda Relação despesas 3º quadr..pdf";

// FOTOVOLTAICO
import PDF17 from "../../../../assets/transparencia/2022/FOTOVOLTAICA/TERMO DE FOMENTO ASSINADO.pdf";
import PDF20 from "../../../../assets/transparencia/2022/FOTOVOLTAICA/EXTRATO-PRESTACAO-CONTAS.pdf";
import PDF21 from "../../../../assets/transparencia/2022/FOTOVOLTAICA/RP-10.pdf";

// QUADRA
import PDF18 from "../../../../assets/transparencia/2022/QUADRA/TERMO DE FOMENTO 12.2022.pdf";

// VAO LIVRE
import PDF19 from "../../../../assets/transparencia/2022/COBERTURA VÃO LIVRE/TERMO DE FOMENTO COMPLETO ASSINADO.pdf";

export function Doc2024() {
  const TF01_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF2,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF1,
    },
  ];
  const TF02_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF4,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF3,
    },
  ];
  const TF03_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF6,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF5,
    },
  ];
  const TF04_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF8,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF7,
    },
  ];
  const TF05_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF10,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF9,
    },
  ];
  const TF07_2021 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF12,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF11,
    },
  ];
  const TF21_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF14,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF13,
    },
  ];
  const TF22_2022 = [
    {
      title: "Relação despesas - 3º Quadrimestre",
      link: PDF16,
    },
    {
      title: "RP 10 - 3º Quadrimestre",
      link: PDF15,
    },
  ];
  const FOTOFOLTAICO = [
    {
      title: "Termo de Fomento",
      link: PDF17,
    },
    {
      title: "Extrato prestação de contas",
      link: PDF20,
    },
    {
      title: "RP 10",
      link: PDF21,
    },
  ];
  const QUADRA = [
    {
      title: "Termo de Fomento",
      link: PDF18,
    },
  ];
  const VAOLIVRE = [
    {
      title: "Termo de Fomento",
      link: PDF19,
    },
  ];
  return (
    <>
      <div className={style.container}>
        <BtnBack link="/docprestacaocontas" />
        <div className={style.titulo}>
          <h1>Documentos 2024</h1>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 01/2022</h1>
          <div className={style.cards}>
            {TF01_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 02/2022</h1>
          <div className={style.cards}>
            {TF02_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 03/2022</h1>
          <div className={style.cards}>
            {TF03_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 04/2022</h1>
          <div className={style.cards}>
            {TF04_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 05/2022</h1>
          <div className={style.cards}>
            {TF05_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 07/2021</h1>
          <div className={style.cards}>
            {TF07_2021.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 21/2022</h1>
          <div className={style.cards}>
            {TF21_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>TF 22/2022</h1>
          <div className={style.cards}>
            {TF22_2022.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>Fotovoltaico</h1>
          <div className={style.cards}>
            {FOTOFOLTAICO.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>Quadra Poliesportiva</h1>
          <div className={style.cards}>
            {QUADRA.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
              />
            ))}
          </div>
        </div>

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>Cobertura Vão Livre</h1>
          <div className={style.cards}>
            {VAOLIVRE.map((component, index) => (
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
