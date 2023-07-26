import { Link } from 'react-router-dom'
import style from './style.module.css'

import { GrDocumentPerformance } from 'react-icons/gr'

export function Transparencia() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Transparência</h1>
                </div>

                <div className={style.cards}>
                    <section className={style.card}>
                        <GrDocumentPerformance color='black' size={60} />
                        <h1>Documentos Associação</h1>
                        <div className={style.btn}>
                            <Link to='/docassociacao'><button onClick={scrollToTop}>Acessar</button></Link>
                        </div>
                    </section>

                    <section className={style.card}>
                        <GrDocumentPerformance color='black' size={60} />
                        <h1>Prestação de Contas</h1>
                        <div className={style.btn}>
                            <Link to='/docprestacaocontas'><button onClick={scrollToTop}>Acessar</button></Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}