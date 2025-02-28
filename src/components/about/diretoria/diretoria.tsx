import style from "./diretoria.module.css";

import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardColaboradores } from "../../component/card-colaboradores/card-colaboradores";

export function Diretoria() {
  const diretores = [
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
    {
      name: "teste",
      occupation: "teste",
      workload: "40 horas",
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
        <div className={style.tituloTexto}>
          <p>Diretoria</p>
          <h1>Diretoria</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Conheça a <span className={style.textoPrincipalGreen}>diretoria</span>{" "}
          da <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>
      <div className={style.container}>
        {diretores.map((diretor, index) => (
          <CardColaboradores
            key={index}
            name={diretor.name}
            occupation={diretor.occupation}
            workload={diretor.workload}
          />
        ))}
      </div>
    </>
  );
}
