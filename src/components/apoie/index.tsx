import style from './style.module.css'

import { SiCashapp } from 'react-icons/si'
import { RiHandHeartFill } from 'react-icons/ri'
import { MdAccountBalance } from 'react-icons/md'


export function Apoie() {
    return (
        <>
            <div className={style.container}>
                <div className={style.apoie_column}>
                    <article className={style.block}>
                        <p className={style.icon_apoie}><SiCashapp color='#028535' /></p>
                        <strong>Pix</strong>
                        <p>53.640.116/0001-51</p>
                    </article>

                    <article className={style.block}>
                        <p className={style.icon_apoie}><MdAccountBalance color='#028535' /></p>
                        <strong>Conta bancária</strong>
                        <p>
                            Sicoob Credimota - 176<br />
                            Agencia: 3190<br />
                            Conta: 8.835-8<br />
                            Conta Corrente<br />
                            Associação de Proteção a Criança e ao Adolescente de Paraguaçu Paulista - Casa Lar
                        </p>
                    </article>

                    <article className={style.block}>
                        <p className={style.icon_apoie}><RiHandHeartFill color='#028535' /></p>
                        <strong>Doações presenciais</strong>
                        <p>Avenida Manoel Antonio de Souza, 1896, Barra Funda - Paraguaçu Paulista - SP</p>
                    </article>
                </div>
            </div>
        </>
    )
}