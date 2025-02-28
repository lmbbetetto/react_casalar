import style from "./diretoria.module.css";

import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardColaboradores } from "../../component/card-colaboradores/card-colaboradores";
import { BtnBack } from "../../component/buttonBack/back";

export function Diretoria() {
  const diretoria = [
    {
      section: "Presidente",
      diretoria: [
        {
          name: "Claudemir Targino da Silva",
          occupation: "Presidente",
        },
      ],
    },
    {
      section: "Vice-Presidente",
      diretoria: [
        {
          name: "Masayuki Hojo",
          occupation: "Vice-Presidente",
        },
      ],
    },
    {
      section: "Secretários",
      diretoria: [
        {
          name: "Sarkis Melhem Jamil Filho",
          occupation: "1º Secretário",
        },
        {
          name: "Murilo Aleoti",
          occupation: "2º Secretário",
        },
      ],
    },
    {
      section: "Tesoureiros",
      diretoria: [
        {
          name: "Rodrigo Hiroshi Kakinohana",
          occupation: "1º Tesoureiro",
        },
        {
          name: "Matheus Veríssimo Cristiano Pereira",
          occupation: "2º Tesoureiro",
        },
      ],
    },
    {
      section: "Consultor Fiscal",
      diretoria: [
        {
          name: "Roque Silveira de Almeida",
          occupation: "Consultor Fiscal",
        },
      ],
    },
    {
      section: "Conselho Fiscal",
      diretoria: [
        {
          name: "José Burati Neto",
          occupation: "Conselheiro Fiscal",
        },
        {
          name: "Lahude Roumanos Dib",
          occupation: "Conselheiro Fiscal",
        },
        {
          name: "José Ricardo Bossoni",
          occupation: "Conselheiro Fiscal",
        },
      ],
    },
    {
      section: "Diretor Jurídico",
      diretoria: [
        {
          name: "Giuliano Henrique Pelegrini Merce",
          occupation: "Diretor Jurídico",
        },
      ],
    },
    {
      section: "Diretor Social",
      diretoria: [
        {
          name: "Armando Rodrigues de Lima",
          occupation: "Diretor Social",
        },
      ],
    },
    {
      section: "Diretor de Patrimônio",
      diretoria: [
        {
          name: "José Augusto Benício Rodrigues",
          occupation: "Diretor de Patrimônio",
        },
      ],
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
      <div className={style.bntBack}>
        <BtnBack link="/documentos-2025" />
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Conheça a <span className={style.textoPrincipalGreen}>diretoria</span>{" "}
          da <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>
      <div className={style.container}>
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
      </div>
    </>
  );
}
