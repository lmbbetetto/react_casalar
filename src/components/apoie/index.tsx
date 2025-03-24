import style from "./style.module.css";

import { SiCashapp } from "react-icons/si";
import { RiHandHeartFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";

import imgFundo from "../../assets/support-photo.jpg";

export function Apoie() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Doações</p>
          <h1>Doações</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <h1 className={style.textoPrincipal}>
          Deseja <span className={style.textoPrincipalGreen}>ajudar</span> a{" "}
          <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>?
          <br />
          Conheça as{" "}
          <span className={style.textoPrincipalGreen}>
            maneiras disponíveis
          </span>
          !
        </h1>
        <div className={style.apoie_column}>
          <article className={style.block}>
            <p className={style.icon_apoie}>
              <SiCashapp color="#028535" />
            </p>
            <strong>Pix</strong>
            <p>53.640.116/0001-51</p>
          </article>

          <article className={style.block}>
            <p className={style.icon_apoie}>
              <MdAccountBalance color="#028535" />
            </p>
            <strong>Conta bancária</strong>
            <p>
              Sicoob Credimota - 176
              <br />
              Agencia: 3190
              <br />
              Conta: 8.835-8
              <br />
              Conta Corrente
              <br />
              Associação de Proteção a Criança e ao Adolescente de Paraguaçu
              Paulista - Casa Lar
            </p>
          </article>

          <article className={style.block}>
            <p className={style.icon_apoie}>
              <RiHandHeartFill color="#028535" />
            </p>
            <strong>Doações presenciais</strong>
            <p>
              Avenida Manoel Antonio de Souza, 1896, Barra Funda - Paraguaçu
              Paulista - SP
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
