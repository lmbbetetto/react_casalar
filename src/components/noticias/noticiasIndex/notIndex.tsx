import style from "./styles.module.css";
import { Cnoticia } from "./noticia/noticia";

import FVLT from "../../../assets/fotovoltaico.jpeg";
import CVL from "../../../assets/vaolivre.jpeg";

export function NotIndex() {
  const noticias = [
    {
      title: "Fotovoltaico",
      link: "/noticias/fotovoltaico",
      paragraph:
        "Em dezembro de 2022, a Instituição implantou um Sistema de Energia Solar - Fotovoltaica, em parceria com a Secretaria do Desenvolvimento Social do Governo do Estado de São Paulo. O projeto terá grande impacto, pois garantirá maior potência e produção de energia, resultando em redução dos custos e possibilidade de economia para investimentos e manutenção das necessidades da OSC.",
      photo: FVLT,
      date: "26/07/2023 - Andréia Oliveira",
    },
    {
      title: "Construção Cobertura Vão Livre",
      link: "/noticias/vaolivre",
      paragraph:
        "Em março de 2023, a Instituição iniciou a construção de uma Cobertura Vão Livre em parceria com o Governo do Estado de São Paulo. Essa estrutura proporcionará um espaço adequado para atividades de acolhimento institucional e projetos sociais, promovendo inclusão social e interação com a comunidade.",
      photo: CVL,
      date: "26/07/2023 - Andréia Oliveira",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>Notícias</h1>
        </div>

        {noticias.map((component, index) => (
          <Cnoticia
            key={index}
            title={component.title}
            link={component.link}
            paragraph={component.paragraph}
            photo={component.photo}
            date={component.date}
          />
        ))}
      </div>
    </>
  );
}
