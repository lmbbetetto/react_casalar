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
            Nossa organização foi oficialmente constituída em 10 de dezembro de
            1958, com a missão de oferecer Proteção Integral a crianças e
            adolescentes em situação de abandono e desamparo familiar.
            Inicialmente, nosso trabalho era realizado por meio do acolhimento
            em regime de internato, modelo que, com o tempo, evoluiu para o
            atual formato de Acolhimento Institucional, garantindo um ambiente
            seguro e acolhedor para aqueles que necessitam.
          </p>
          <p className={style.paragraph}>
            Movida pelo compromisso inabalável com o bem-estar de crianças e
            adolescentes, a Casa Lar expandiu sua atuação ao longo dos anos. Em
            2006, assumiu um novo papel de grande relevância ao tornar-se a
            Organização Certificadora do Projeto C.A.R.A. – Construindo Ações
            Reais para Adolescentes. Desde 2004, esse projeto tem sido um pilar
            essencial na promoção do Serviço de Convivência e Fortalecimento de
            Vínculos para Jovens, oferecendo oportunidades de qualificação
            profissional e inserção no mundo do trabalho. Essa iniciativa está
            plenamente alinhada à Lei do Aprendiz (nº 10.097/2000), reforçando
            nosso compromisso com o desenvolvimento social e profissional da
            juventude.
          </p>
          <p>
            Ao longo de sua trajetória, a Casa Lar tem se reinventado para
            atender às necessidades emergentes da sociedade, sempre com o
            propósito de proporcionar um futuro mais digno e promissor para
            crianças e adolescentes. Seguimos firmes em nossa missão de garantir
            direitos, fortalecer vínculos familiares e comunitários e criar
            oportunidades que transformam vidas.
          </p>
        </div>
        <div className={style.card}>
          <h1 className={style.titulos}>Missão</h1>
          <p className={style.text}>
            Cultivar projetos destinados às crianças, adolescentes, jovens,
            adultos e toda sua família, estimulando uma cultura de paz e
            convivência comunitária, prevenindo situações de risco social e
            promovendo acesso às políticas de educação, saúde, cultura, esporte
            e lazer existentes no território.
          </p>
          <h1 className={style.titulos}>Valores</h1>
          <p>
            A nossa organização busca primeiramente constituir-se como um espaço
            de acolhida, escuta, construção e reconstrução de história, tendo
            como, princípios e valores norteadores o amor, o respeito, a
            igualdade, a honestidade, a dignidade, a paz e felicidade.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.titulos}>Projeto C.A.R.A.</h1>
          <p className={style.paragraph}>
            Nossa organização foi oficialmente constituída em 10 de dezembro de
            1958, com a missão de oferecer Proteção Integral a crianças e
            adolescentes em situação de abandono e desamparo familiar.
            Inicialmente, nosso trabalho era realizado por meio do acolhimento
            em regime de internato, modelo que, com o tempo, evoluiu para o
            atual formato de Acolhimento Institucional, garantindo um ambiente
            seguro e acolhedor para aqueles que necessitam.
          </p>
          <p className={style.paragraph}>
            Movida pelo compromisso inabalável com o bem-estar de crianças e
            adolescentes, a Casa Lar expandiu sua atuação ao longo dos anos. Em
            2006, assumiu um novo papel de grande relevância ao tornar-se a
            Organização Certificadora do Projeto C.A.R.A. – Construindo Ações
            Reais para Adolescentes. Desde 2004, esse projeto tem sido um pilar
            essencial na promoção do Serviço de Convivência e Fortalecimento de
            Vínculos para Jovens, oferecendo oportunidades de qualificação
            profissional e inserção no mundo do trabalho. Essa iniciativa está
            plenamente alinhada à Lei do Aprendiz (nº 10.097/2000), reforçando
            nosso compromisso com o desenvolvimento social e profissional da
            juventude.
          </p>
          <p>
            Ao longo de sua trajetória, a Casa Lar tem se reinventado para
            atender às necessidades emergentes da sociedade, sempre com o
            propósito de proporcionar um futuro mais digno e promissor para
            crianças e adolescentes. Seguimos firmes em nossa missão de garantir
            direitos, fortalecer vínculos familiares e comunitários e criar
            oportunidades que transformam vidas.
          </p>
        </div>
        <div className={style.card}>
          <h1 className={style.titulos}>Missão</h1>
          <p className={style.text}>
            Cultivar projetos destinados às crianças, adolescentes, jovens,
            adultos e toda sua família, estimulando uma cultura de paz e
            convivência comunitária, prevenindo situações de risco social e
            promovendo acesso às políticas de educação, saúde, cultura, esporte
            e lazer existentes no território.
          </p>
          <h1 className={style.titulos}>Valores</h1>
          <p>
            A nossa organização busca primeiramente constituir-se como um espaço
            de acolhida, escuta, construção e reconstrução de história, tendo
            como, princípios e valores norteadores o amor, o respeito, a
            igualdade, a honestidade, a dignidade, a paz e felicidade.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.titulos}>Autismo</h1>
          <p className={style.paragraph}>
            Nossa organização foi oficialmente constituída em 10 de dezembro de
            1958, com a missão de oferecer Proteção Integral a crianças e
            adolescentes em situação de abandono e desamparo familiar.
            Inicialmente, nosso trabalho era realizado por meio do acolhimento
            em regime de internato, modelo que, com o tempo, evoluiu para o
            atual formato de Acolhimento Institucional, garantindo um ambiente
            seguro e acolhedor para aqueles que necessitam.
          </p>
          <p className={style.paragraph}>
            Movida pelo compromisso inabalável com o bem-estar de crianças e
            adolescentes, a Casa Lar expandiu sua atuação ao longo dos anos. Em
            2006, assumiu um novo papel de grande relevância ao tornar-se a
            Organização Certificadora do Projeto C.A.R.A. – Construindo Ações
            Reais para Adolescentes. Desde 2004, esse projeto tem sido um pilar
            essencial na promoção do Serviço de Convivência e Fortalecimento de
            Vínculos para Jovens, oferecendo oportunidades de qualificação
            profissional e inserção no mundo do trabalho. Essa iniciativa está
            plenamente alinhada à Lei do Aprendiz (nº 10.097/2000), reforçando
            nosso compromisso com o desenvolvimento social e profissional da
            juventude.
          </p>
          <p>
            Ao longo de sua trajetória, a Casa Lar tem se reinventado para
            atender às necessidades emergentes da sociedade, sempre com o
            propósito de proporcionar um futuro mais digno e promissor para
            crianças e adolescentes. Seguimos firmes em nossa missão de garantir
            direitos, fortalecer vínculos familiares e comunitários e criar
            oportunidades que transformam vidas.
          </p>
        </div>
        <div className={style.card}>
          <h1 className={style.titulos}>Missão</h1>
          <p className={style.text}>
            Cultivar projetos destinados às crianças, adolescentes, jovens,
            adultos e toda sua família, estimulando uma cultura de paz e
            convivência comunitária, prevenindo situações de risco social e
            promovendo acesso às políticas de educação, saúde, cultura, esporte
            e lazer existentes no território.
          </p>
          <h1 className={style.titulos}>Valores</h1>
          <p>
            A nossa organização busca primeiramente constituir-se como um espaço
            de acolhida, escuta, construção e reconstrução de história, tendo
            como, princípios e valores norteadores o amor, o respeito, a
            igualdade, a honestidade, a dignidade, a paz e felicidade.
          </p>
        </div>
      </div>
    </>
  );
}
