import { GrDocumentPerformance } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BtnBack } from '../../buttonBack/back'
import style from './style.module.css'

export function DocPrestacaoContas() {
    return (
        <>
            <div className={style.container}>
                <BtnBack
                    link='/transparencia'
                />
                <div className={style.titulo}>
                    <h1>Documentos Prestação de Contas</h1>
                </div>
                <div className={style.cards}>
                    <section className={style.card}>
                        <GrDocumentPerformance color='black' size={60} />
                        <h1>2022</h1>
                        <div className={style.btn}>
                            <Link to='/doc2022'><button>Acessar</button></Link>
                        </div>
                    </section>

                    <section className={style.card}>
                        <GrDocumentPerformance color='black' size={60} />
                        <h1>2023</h1>
                        <div className={style.btn}>
                            <Link to='/doc2023'><button>Acessar</button></Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}