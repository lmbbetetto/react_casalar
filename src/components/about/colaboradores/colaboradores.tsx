import style from "./colaboradores.module.css";

import imgFundo from "../../../assets/fundo-transparencia.png";
import { CardColaboradores } from "../../component/card-colaboradores/card-colaboradores";
import { BtnBack } from "../../component/buttonBack/back";

export function Colaboradores() {
  const colaboradores = [
    {
      section: "Coordenação",
      colaboradores: [
        {
          name: "Andréia Aparecida de Oliveira",
          occupation: "Coordenador",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Equipe técnica",
      colaboradores: [
        {
          name: "Gabriela Sampaio Ribeiro",
          occupation: "Assistente Social",
          workload: "30 horas",
        },
        {
          name: "Amanda Eugenia Alves Misorelli de Andrade",
          occupation: "Psicólogo",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Financeiro",
      colaboradores: [
        {
          name: "Ana Cristina de Andrade Silva",
          occupation: "Analista Financeiro",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Fisioterapeuta",
      colaboradores: [
        {
          name: "Bruna Luisa Aguilera  da Rocha",
          occupation: "Fisioterapeuta",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Instrutores",
      colaboradores: [
        {
          name: "Leandro Monteiro de Siqueira",
          occupation: "Instrutor de Aprendizagem",
          workload: "25 horas",
        },
        {
          name: "Luis Fernando Almeida de Araujo",
          occupation: "Instrutor de Aprendizagem",
          workload: "25 horas",
        },
        {
          name: "Zeneilton Granja de Paulo",
          occupation: "Instrutor de Informática",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Assistente Administrativo",
      colaboradores: [
        {
          name: "Tatiana Cristina de Mello",
          occupation: "Assistente Administrativo",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Serviços Gerais",
      colaboradores: [
        {
          name: "Fernanda Ferreira de Souza",
          occupation: "Serviços Gerais",
          workload: "40 horas",
        },
      ],
    },
    {
      section: "Monitores",
      colaboradores: [
        {
          name: "Eliana Bernardete Sampaio Rosalino",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Josiane Magalhães Gass",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Raquel Marques Garcia Pereira",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Sandra Aparecida da Silva",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Tania Regina Silva Vianna",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Vera Lúcia de Oliveira",
          occupation: "Monitor",
          workload: "48 horas",
        },
        {
          name: "Verônica da Silva Santana",
          occupation: "Monitor",
          workload: "48 horas",
        },
      ],
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
        <div className={style.tituloTexto}>
          <p>Colaboradores</p>
          <h1>Colaboradores</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
      </div>
      <div className={style.bntBack}>
        <BtnBack link="/documentos-2025" />
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Conheça os{" "}
          <span className={style.textoPrincipalGreen}>colaboradores</span> da{" "}
          <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>
      <div className={style.container}>
        {colaboradores.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.section}</h1>
            <div className={style.cards}>
              {group.colaboradores.map((colaborador, colaIndex) => (
                <CardColaboradores
                  key={colaIndex}
                  name={colaborador.name}
                  occupation={colaborador.occupation}
                  workload={colaborador.workload}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
