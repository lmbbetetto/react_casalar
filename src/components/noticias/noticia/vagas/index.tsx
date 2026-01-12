import style from "./styles.module.css";
import { BtnBack } from "../../../component/buttonBack/back";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import IMG1 from "../../../../assets/trator.jpeg";
import IMG2 from "../../../../assets/trator-1.jpg";

const images = [IMG1, IMG2];

/* ===== ESTILOS DA TABELA (IGUAL AO WORD) ===== */
const th = {
  border: "1px solid #000",
  padding: "8px",
  textAlign: "center" as const,
  fontWeight: "bold",
  backgroundColor: "#f2f2f2",
};

const td = {
  border: "1px solid #000",
  padding: "8px",
  verticalAlign: "top" as const,
  fontSize: "14px",
};

export function Vagas() {
  return (
    <>
      {/* ===== CONTEÚDO ===== */}
      <div className={style.containerNot}>
        <BtnBack link="/noticias" />

        <div className={style.container}>
          <span>
            Associação de Proteção à Criança e ao Adolescente de Paraguaçu
            Paulista
          </span>

          <h1 className={style.title_h1}>
            PROCESSO SELETIVO – CLÍNICA DE REABILITAÇÃO E ESTIMULAÇÃO PRECOCE
          </h1>

          {/* ===== TABELA ===== */}
          <div className={style.tableWrapper}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "2rem",
              }}
            >
              <thead>
                <tr>
                  <th style={th}>CARGO</th>
                  <th style={th}>PRÉ-REQUISITOS</th>
                  <th style={th}>REGIME</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>FISIOTERAPEUTA</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>FONOAUDIÓLOGO</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>PSICÓLOGO</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>NUTRICIONISTA</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>ASSISTENTE SOCIAL</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>EDUCADOR FÍSICO</td>
                  <td style={td}>
                    – Formação superior completa;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Conhecimento na área.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>ASSISTENTE TERAPÊUTICO</td>
                  <td style={td}>
                    – Ensino médio completo;
                    <br />
                    – Experiência prévia na área;
                    <br />– Desejável vivência com crianças neuroatípicas.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>SERVIÇOS GERAIS</td>
                  <td style={td}>
                    – Experiência prévia na função;
                    <br />– Organização, responsabilidade e boa comunicação.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>ATENDENTE</td>
                  <td style={td}>
                    – Organização, responsabilidade e boa comunicação.
                  </td>
                  <td style={td}>CLT</td>
                </tr>

                <tr>
                  <td style={td}>COORDENADOR / RESPONSÁVEL TÉCNICO</td>
                  <td style={td}>
                    – Formação superior na área da saúde;
                    <br />
                    – Registro ativo no conselho profissional;
                    <br />– Capacidade de gestão de equipe multiprofissional.
                  </td>
                  <td style={td}>CLT</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== TEXTO FINAL ===== */}
          <p style={{ marginTop: "2rem" }}>
            Os interessados devem enviar o currículo
            <strong> EXCLUSIVAMENTE por e-mail</strong> para{" "}
            <strong>casalar.tea@gmail.com</strong> até{" "}
            <strong>17 de janeiro de 2026 às 17 horas</strong>.
          </p>

          <p>
            <strong>DIFERENCIAIS:</strong>
            <br />– Desejável conhecimento em neurodesenvolvimento infantil,
            reabilitação infantil e técnicas de intervenção em criança
            neuroatípica;
            <br />– Facilidade para atuar em equipe multiprofissional;
            <br />– Postura ética, empática e humanizada;
            <br />– Capacidade de planejamento terapêutico individualizado;
            <br />– Interesse em atualização contínua e formação permanente.
          </p>

          <p>
            <strong>PROCESSO SELETIVO:</strong>
            <br />
            1) Análise curricular
            <br />
            2) Entrevista
            <br />
            <br />A data e o horário das entrevistas serão comunicados
            diretamente aos candidatos selecionados na primeira etapa.
          </p>

          <p>
            <strong>CONTRATAÇÃO DE EMPRESA</strong>
            <br />
            Contrata-se empresa especializada em equoterapia para atendimento na
            sede da Casa Lar, em Paraguaçu Paulista-SP, fornecendo os animais e
            os profissionais habilitados, com até 80 atendimentos mensais.
            <br />
            <br />
            Enviar proposta para o e-mail:
            <br />
            <strong>casalar.tea@gmail.com</strong>
          </p>
        </div>
      </div>
    </>
  );
}
