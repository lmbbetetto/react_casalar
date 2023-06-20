import style from './style.module.css'

import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'


export function Contact() {
    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Contato</h1>
                </div>
                <div className={style.containerContact}>
                    <div className={style.contact__options}>
                        <article className={style.contact__option}>
                            <ImLocation className={style.contact__option_icon} />
                            <h4>Endereço</h4>
                            <h5>Av. Manoel Antônio de Souza, 1896 - Barra Funda</h5>
                            <h5>Paraguaçu Paulista - SP</h5>
                        </article>

                        <article className={style.contact__option}>
                            <BsFillTelephoneFill className={style.contact__option_icon} />
                            <h4>Endereço</h4>
                            <h5>+55 18 3361-2583</h5>
                        </article>

                        <article className={style.contact__option}>
                            <BsFacebook className={style.contact__option_icon} />
                            <h4>Facebook</h4>
                            <h5>Associação Casa Lar</h5>
                            <a href="https://www.facebook.com/people/CasaLar-Juventino-Pereira/pfbid02YFimXdTnSiLrUpLygHxW9dAYsL8GdqL2HWZNMzgsjbp61EkjaDwn5BvkHNR8hcpvl/" target='_blank'>Acesse</a>
                        </article>

                        <article className={style.contact__option}>
                            <AiFillInstagram size={30} className={style.contact__option_icon} />
                            <h4>Instagram</h4>
                            <h5>Projeto CARA</h5>
                            <a href="https://www.instagram.com/projeto.cara/" target='_blank'>Acesse</a>
                        </article>
                    </div>
                    <div>
                        <form>
                            <input type="text" name='name' placeholder='Nome completo' required />
                            <input type="email" name="email" placeholder='Email' required />
                            <input type="phone" name="phone" placeholder='Telefone' required />
                            <textarea name="message" rows={7} placeholder='Mensagem' required></textarea>
                            <button type='submit' className={style.btnForm}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}