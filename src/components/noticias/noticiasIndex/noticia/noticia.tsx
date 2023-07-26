import { Link } from 'react-router-dom'
import style from './style.module.css'

interface cNoticias {
    title: string,
    photo: string,
    paragraph: string,
    link: string,
    date: string,
}

export const Cnoticia: React.FC<cNoticias> = ({ title, photo, paragraph, link, date }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <section className={style.noticia}>
                <img src={photo} alt="foto noticia" />
                <div className={style.texto}>
                    <div className={style.body}>
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <span>{date}</span>
                        <Link to={link}><button onClick={scrollToTop}>Acessar</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}