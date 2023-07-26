import { BtnBack } from '../../buttonBack/back'
import { CardTransparencia } from '../cardTransparencia'
import style from './style.module.css'

export function DocAssociacao() {
    const documents = [
        {
            title: 'Teste',
            link: 'teste'
        },
    ]
    return (
        <>
            <div className={style.container}>
                <BtnBack
                    link='/transparencia'
                />
                <div className={style.titulo}>
                    <h1>Documentos Associação</h1>
                </div>
                <div className={style.cards}>
                    {
                        documents.map((component, index) => (
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