import "./styles.css";
import imgFundo from "../../assets/fundo_home.jpg";

import { Link } from "react-router-dom";
import { CardNoticia } from "../noticias/cardNoticia";

import FTVL from "../../assets/fotovoltaico.jpeg";
import CVL from "../../assets/vaolivre.jpeg";

export function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const noticias = [
    //Adcionar no máximo 5 notícias. Excluir notícias antigas
    {
      title: "Instalação Sistema Fotovoltaico",
      photo: FTVL,
      link: "/noticias/fotovoltaico",
    },
    {
      title: "Construção Cobertura Vão Livre",
      photo: CVL,
      link: "/noticias/vaolivre",
    },
  ];
  return (
    <>
      <div className="img_fundo">
        <img src={imgFundo} alt="Imagem de fundo" className="imgHome" />
      </div>
      <div className="sobreHome">
        <div className="titulo">
          <h1>História</h1>
        </div>
        <p>
          A organização Casa Lar foi fundada em 10 de dezembro de 1958 com o
          objetivo de oferecer proteção integral a crianças e adolescentes em
          situação de abandono e desamparo familiar. Ao longo do tempo, a Casa
          Lar demonstrou extrema preocupação com o bem-estar desses jovens. Em
          2006, a organização se tornou a Organização Certificadora do Projeto
          C.A.R.A. (Construindo Ações Reais para Adolescentes), que desde 2004
          desenvolve o Serviço de Convivência e Fortalecimento de Vínculos para
          Jovens, com foco na qualificação e inserção no mundo do trabalho,
          conforme a Lei do Aprendiz nº. 10.097/2000.
        </p>
        <p>
          No ano de 2025 se tornou a Organização Certificadora do Centro de
          Estimulação e Reabilitação Precoce
        </p>
        <div className="divbotao">
          <Link to="/sobre">
            <button className="btn_noticia" onClick={scrollToTop}>
              História completa
            </button>
          </Link>
        </div>
      </div>

      <section className="container2">
        <section className="sobre2Home">
          <div className="internaHome">
            <div className="titulo">
              <h1>Últimas notícias</h1>
            </div>
            <div className="cards">
              {noticias.map((component, index) => (
                <CardNoticia
                  key={index}
                  title={component.title}
                  link={component.link}
                  photo={component.photo}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="internaHome">
            <div className="titulo">
              <h1>Transparência</h1>
            </div>
            <div className="cards">
              <p>
                A Casa Lar, tem a transparência como um princípio, por isso,
                disponibilizamos nossos relatórios, balanços e convênios com o
                poder público !
              </p>
            </div>
            <div className="divbotao">
              <Link to="/transparencia">
                <button className="btn_noticia" onClick={scrollToTop}>
                  Transparência
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
