import { AiFillWarning } from 'react-icons/ai'
import style from './style.module.css'

export function ArquivoIndisp() {
    return (
        <>
            <section className={style.card}>
                <AiFillWarning color='red' size={60} />
                <h1>Não ha arquivos disponíveis!</h1>
            </section>
        </>
    )
}