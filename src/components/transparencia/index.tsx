import style from './style.module.css'
import { MdOutlinePictureAsPdf } from 'react-icons/md'


export function Transparencia() {
    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Transparência</h1>
                </div>

                <div className={style.cards}>
                    <section className={style.card}>
                        <MdOutlinePictureAsPdf color='black' size={60} />
                        <h1>What is Lorem Ipsum?</h1>
                        <a href="" target='_blank'>PDF</a>
                    </section>

                    <section className={style.card}>
                        <MdOutlinePictureAsPdf color='black' size={60} />
                        <h1>What is Lorem Ipsum?</h1>
                        <a href="" target='_blank'>PDF</a>
                    </section>

                    <section className={style.card}>
                        <MdOutlinePictureAsPdf color='black' size={60} />
                        <h1>What is Lorem Ipsum?</h1>
                        <a href="" target='_blank'>PDF</a>
                    </section>
                </div>
            </div>
        </>
    )
}