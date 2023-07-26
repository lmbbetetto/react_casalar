import { Link } from 'react-router-dom'
import style from './style.module.css'
import { FaArrowLeft } from 'react-icons/fa'

interface btn {
    link: string,
}

export const BtnBack: React.FC<btn> = ({ link }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Link to={link}><button className={style.botao}><FaArrowLeft size={15}  onClick={scrollToTop}/> Voltar</button></Link>
        </>
    )
}