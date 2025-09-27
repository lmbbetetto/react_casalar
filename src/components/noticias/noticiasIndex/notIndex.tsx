import style from "./styles.module.css";
import { Cnoticia } from "./noticia/noticia";

import imgFundo from "../../../assets/news-photo.jpg";

import FVLT from "../../../assets/fotovoltaico.jpeg";
import CVL from "../../../assets/vaolivre.jpeg";
import CAR from "../../../assets/carro-2.jpeg";
import TRAT from "../../../assets/trator.jpeg";

export function NotIndex() {
  const noticias = [
    {
      title:
        "Aquisição de Trator Cortador de Grama através de Emenda Parlamentar",
      link: "/noticias/aquisicao-trator",
      paragraph:
        "Associação Casa Lar recebe trator cortador de grama por meio de emenda parlamentar Em agosto de 2025, a Associação Casa Lar foi beneficiada...",
      photo: TRAT,
      date: "27/09/2025 - Andréia Oliveira",
    },
    {
      title: "Aquisição de Automóvel através de Emenda Parlamentar",
      link: "/noticias/aquisicao-automovel",
      paragraph:
        "Em outubro de 2023, a Associação Casa Lar recebeu um automóvel modelo Spin, adquirido por meio de uma Emenda Parlamentar do Deputado Estadual Vinicius Camarinha. A entrega foi feita pelo assessor Ian Salomão à equipe da instituição. O veículo visa melhorar o transporte dos atendidos e a realização de atividades essenciais, proporcionando mais eficiência e segurança nas operações diárias da Casa Lar. Essa aquisição representa um avanço significativo na mobilidade e logística da instituição.",
      photo: CAR,
      date: "10/2023 - Andréia Oliveira",
    },
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
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Notícias</p>
          <h1>Notícias</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Fique por dentro de{" "}
          <span className={style.textoPrincipalGreen}>todas</span> as{" "}
          <span className={style.textoPrincipalGreen}>notícias</span> da{" "}
          <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>

      <div className={style.container}>
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
