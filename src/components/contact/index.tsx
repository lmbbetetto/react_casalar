import style from './style.module.css'

import { ImLocation } from 'react-icons/im'


export function Contact() {
    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Contato</h1>
                </div>
                <div className={style.contact}>
                    <div className={style.card}>
                        <article>
                            <ImLocation size={30} color='white' className={style.icon} />
                            <h1>Endereço</h1>
                        </article>

                        <article>
                            <h1>Telefone</h1>
                        </article>

                        <article>
                            <h1>Instagram</h1>
                        </article>

                        <article>
                            <h1>Facebook</h1>
                        </article>
                    </div>

                    <section>
                        <p>olá</p>
                    </section>
                </div>
            </div>
        </>
    )
}