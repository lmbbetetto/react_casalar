import style from './styles.module.css'
import IMG from '../../../assets/fundo_home.jpg'
import { Link } from 'react-router-dom'

export function NotIndex() {
    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Notícias</h1>
                </div>

                <section className={style.noticia}>
                    <img src={IMG} alt="foto noticia" />
                    <div className={style.texto}>
                        <h1>Lorem ipsum dolor?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fuga quos nisi placeat architecto debitis illum. Eveniet vel nisi odio repudiandae eius quaerat necessitatibus alias est consectetur corporis. Iure, quos?</p>
                        <Link to="/noticia"><button>Acessar</button></Link>
                    </div>
                </section>

                <section className={style.noticia}>
                    <img src={IMG} alt="foto noticia" />
                    <div className={style.texto}>
                        <h1>Lorem ipsum dolor?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fuga quos nisi placeat architecto debitis illum. Eveniet vel nisi odio repudiandae eius quaerat necessitatibus alias est consectetur corporis. Iure, quos?</p>
                        <Link to="/noticia"><button>Acessar</button></Link>
                    </div>
                </section>

                <section className={style.noticia}>
                    <img src={IMG} alt="foto noticia" />
                    <div className={style.texto}>
                        <h1>Lorem ipsum dolor?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fuga quos nisi placeat architecto debitis illum. Eveniet vel nisi odio repudiandae eius quaerat necessitatibus alias est consectetur corporis. Iure, quos?</p>
                        <Link to="/noticia"><button>Acessar</button></Link>
                    </div>
                </section>
            </div>
        </>
    )
}