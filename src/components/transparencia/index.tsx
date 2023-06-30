import { CardTransparencia } from './cardTransparencia'
import style from './style.module.css'

import pdf1 from '../../assets/transparencia/ASSOCIACAO CASA LAR - BP 2022_ASSINADO.pdf'
import pdf2 from '../../assets/transparencia/ATA ALTERAÇÃO E CONSOLIDAÇÃO 10º ESTATUTO - nov 2022.pdf'


export function Transparencia() {

    const cards = [
        {
            title: 'ASSOCIACAO CASA LAR - BP 2022_ASSINADO',
            link: pdf1,
        },
        {
            title: 'ATA ALTERAÇÃO E CONSOLIDAÇÃO 10º ESTATUTO - nov 2022',
            link: pdf2,
        },
    ]

    return (
        <>
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Transparência</h1>
                </div>

                <div className={style.cards}>
                    {
                        cards.map((component, index) => (
                            <CardTransparencia 
                                key={index}
                                title={component.title}
                                link={component.link}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}