import style from "./servicos.module.css";

import imgFundo from "../../../assets/fundo-transparencia.png";

export function Servicos() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Serviços</p>
          <h1>Serviços</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Conheça os <span className={style.textoPrincipalGreen}>serviços</span>{" "}
          prestados pela{" "}
          <span className={style.textoPrincipalGreen}>Casa Lar</span>!
        </h1>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.titulos}>Associaçao Casa Lar</h1>
          <p className={style.paragraph}>
            A Associação Casa Lar é uma instituição dedicada à proteção e
            acolhimento de crianças e adolescentes em situação de
            vulnerabilidade. Seu principal objetivo é oferecer um ambiente
            seguro e estruturado para aqueles que foram afastados do convívio
            familiar devido a situações de abandono ou desamparo.
          </p>
          <p className={style.paragraph}>
            A organização atua por meio do Acolhimento Institucional, garantindo
            assistência integral e promovendo o fortalecimento de vínculos
            familiares e comunitários. Além disso, desempenha um papel
            fundamental na inclusão social e profissional de jovens, sendo a
            Organização Certificadora do Projeto C.A.R.A. (Construindo Ações
            Reais para Adolescentes). Esse projeto, alinhado à Lei do Aprendiz
            (nº 10.097/2000), oferece oportunidades de capacitação profissional
            e inserção no mercado de trabalho.
          </p>
          <p>
            Com uma atuação pautada no compromisso com o bem-estar infantil e
            juvenil, a Casa Lar se dedica a assegurar direitos, promover
            autonomia e criar oportunidades para um futuro mais digno e
            promissor.
          </p>
        </div>
        <div className={style.card2}>
          <img
            src={imgFundo}
            alt="Imagem de fundo"
            className={style.imgCards}
          />
          <img
            src={imgFundo}
            alt="Imagem de fundo"
            className={style.imgCards1}
          />
          <img
            src={imgFundo}
            alt="Imagem de fundo"
            className={style.imgCards2}
          />
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.card2}>
          <img src={imgFundo} alt="Imagem de fundo" className={style.imgCard} />
          <img
            src={imgFundo}
            alt="Imagem de fundo"
            className={style.imgCard1}
          />
          <img
            src={imgFundo}
            alt="Imagem de fundo"
            className={style.imgCard2}
          />
        </div>
        <div className={style.card}>
          <h1 className={style.titulos}>Projeto C.A.R.A.</h1>
          <p className={style.paragraph}>
            O Projeto C.A.R.A. (Construindo Ações Reais para Adolescentes) é uma
            iniciativa social voltada para o desenvolvimento comportamental e
            profissional de adolescentes, preparando-os para a inserção no
            mercado de trabalho.
          </p>
          <p className={style.paragraph}>
            O projeto oferece capacitação que vai além do conhecimento técnico,
            promovendo o fortalecimento de habilidades interpessoais, ética
            profissional e senso de responsabilidade. Alinhado à Lei do Aprendiz
            (nº 10.097/2000), o C.A.R.A. garante que os participantes tenham
            acesso a oportunidades reais de aprendizado prático e
            desenvolvimento pessoal, facilitando sua transição para a vida
            profissional.
          </p>
          <p>
            Com essa abordagem, o Projeto C.A.R.A. contribui para a construção
            de um futuro mais promissor, criando condições para que adolescentes
            ingressem no mercado de trabalho de forma qualificada e segura.
          </p>
        </div>
      </div>
    </>
  );
}
