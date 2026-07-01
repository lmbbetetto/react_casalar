import { BtnBack } from "../../component/buttonBack/back";
import { CardTransparencia } from "../card-transparencia";
import style from "./style.module.css";
import imgFundo from "../../../assets/fundo-transparencia.png";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { documentsAssociacao } from "./mock";

export function DocAssociacao() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Documentos Associação</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/transparencia" />
        <h1 className={style.textoPrincipal}>
          A <span className={style.textoPrincipalGreen}>Casa Lar</span>, tem a
          <span className={style.textoPrincipalGreen}> transparência </span>
          como um princípio, por isso, disponibilizamos nossos{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios com o poder público
          </span>
          !
        </h1>
        <div className={style.cards}>
          {documentsAssociacao.map((component, index) => (
            <CardTransparencia
              key={index}
              title={component.title}
              link={component.link}
              icon={<MdOutlinePictureAsPdf />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
