import style from './styles.module.css'

import { Link } from 'react-router-dom'

interface cardNoticias {
    link: string,
    title: string,
    photo: string,
}

export const CardNoticia: React.FC<cardNoticias> = ({ link, title, photo }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className={style.container}>
                <div>
                    <img src={photo} alt="" />
                    <div className={style.titulo}>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className={style.botao}>
                    <Link to={link}><button className={style.btn} onClick={scrollToTop}>Confira</button></Link>
                </div>
            </div>
        </>
    )
}