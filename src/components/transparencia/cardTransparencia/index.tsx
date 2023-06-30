import style from './style.module.css'
import { MdOutlinePictureAsPdf } from 'react-icons/md'

interface cardProps {
    title: string;
    link: string;
}

export const CardTransparencia: React.FC<cardProps> = (props) => {
    return (
        <>
            <section className={style.card}>
                <MdOutlinePictureAsPdf color='white' size={60} />
                <h1>{props.title}</h1>
                <div className={style.btn}>
                    <a href={props.link} target='_blank'>PDF</a>
                </div>
            </section>
        </>
    )
}