import style from './styles.module.css'
import IMG from '../../../assets/fundo_home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export function Noticias() {
    return (
        <>
            <div className={style.container}>
                <Link to="/noticias"><button className={style.botao}><FaArrowLeft size={15}/> Voltar</button></Link>
                <h1>What is Lorem Ipsum?</h1>
                <img src={IMG} alt="foto noticia" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </>
    )
}