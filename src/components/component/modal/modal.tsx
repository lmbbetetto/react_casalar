import "./styles.css";

interface ModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content modal-scroll">
        <button className="modal-close-x" onClick={onClose}>
          ✕
        </button>

        <h2>📢 Processo Seletivo</h2>
        <h3>Clínica de Reabilitação e Estimulação Precoce</h3>

        <p className="instituicao">
          Associação de Proteção à Criança e ao Adolescente de Paraguaçu
          Paulista
          <br />
          <strong>Casa Lar – Cel. Juventino Pereira</strong>
        </p>

        <hr />

        <h4>🧑‍⚕️ Vagas Disponíveis (Regime CLT)</h4>
        <ul>
          <li>Fisioterapeuta</li>
          <li>Fonoaudiólogo</li>
          <li>Psicólogo</li>
          <li>Nutricionista</li>
          <li>Assistente Social</li>
          <li>Educador Físico</li>
          <li>Assistente Terapêutico</li>
          <li>Serviços Gerais</li>
          <li>Atendente</li>
          <li>Coordenador / Responsável Técnico</li>
        </ul>

        <h4>📌 Pré-requisitos gerais</h4>
        <ul>
          <li>Formação compatível com o cargo</li>
          <li>Registro ativo no conselho profissional (quando aplicável)</li>
          <li>Conhecimento ou experiência na área</li>
        </ul>

        <h4>⭐ Diferenciais</h4>
        <ul>
          <li>Conhecimento em neurodesenvolvimento e reabilitação infantil</li>
          <li>Vivência com crianças neuroatípicas</li>
          <li>Trabalho em equipe multiprofissional</li>
          <li>Postura ética, empática e humanizada</li>
        </ul>

        <h4>📝 Processo Seletivo</h4>
        <ol>
          <li>Análise curricular</li>
          <li>Entrevista (agendada com candidatos selecionados)</li>
        </ol>

        <h4>📨 Envio de Currículo</h4>
        <p>
          Enviar <strong>exclusivamente por e-mail</strong> para:
          <br />
          <strong>casalar.tea@gmail.com</strong>
          <br />
          <br />⏰ <strong>Prazo:</strong> até{" "}
          <strong>17/01/2026 às 17h</strong>
        </p>

        <hr />

        <h4>🐎 Contratação de Empresa – Equoterapia</h4>
        <p>
          Contrata-se empresa especializada em equoterapia para atendimento na
          sede da Casa Lar, com fornecimento de animais e profissionais
          habilitados, até <strong>80 atendimentos mensais</strong>.
        </p>

        <p>
          📧 Enviar proposta para:
          <br />
          <strong>casalar.tea@gmail.com</strong>
        </p>

        {/* <button className="btn-fechar" onClick={onClose}>
          Fechar
        </button> */}
      </div>
    </div>
  );
}
