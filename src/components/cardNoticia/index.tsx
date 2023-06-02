import style from './styles.module.css'

import IMG from '../../assets/fundo_home.jpg'

export function CardNoticia() {
    return (
        <>
            <div className={style.container}>
                <img src={IMG} alt="" />
                <div className={style.titulo}>
                    <h1>What is Lorem Ipsum?</h1>
                </div>
                <div className={style.botao}>
                    <button className={style.btn}>Confira</button>
                </div>
            </div>
        </>
    )
}