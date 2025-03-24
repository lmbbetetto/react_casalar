import style from "./fotos.module.css";

import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardColaboradores } from "../../component/card-colaboradores/card-colaboradores";
import { BtnBack } from "../../component/buttonBack/back";
import { ArquivoIndisp } from "../../component/arquivoIndisp/indisp";

export function Fotos() {
  const diretoria = [
    {
      section: "",
      diretoria: [
        {
          name: "",
          occupation: "",
        },
      ],
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
        <div className={style.tituloTexto}>
          <p>Galeria de Fotos</p>
          <h1>Galeria de Fotos</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
      </div>
      <div className={style.bntBack}>
        {/* <BtnBack link="/transparencia/prestacao-contas/documentos-2025" /> */}
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Conheça a{" "}
          <span className={style.textoPrincipalGreen}>galeria de fotos</span> da{" "}
          <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>
      {/* <div className={style.container}>
        {diretoria.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.section}</h1>
            <div className={style.cards}>
              {group.diretoria.map((diretor, index) => (
                <CardColaboradores
                  key={index}
                  name={diretor.name}
                  occupation={diretor.occupation}
                />
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div className={style.indsp}>
        <ArquivoIndisp />
      </div>
    </>
  );
}
