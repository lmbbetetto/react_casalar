import { BtnBack } from '../../../buttonBack/back'
import { CardTransparencia } from '../../cardTransparencia'
import style from './style.module.css'

export function Doc2023() {
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
                    link='/docprestacaocontas'
                />
                <div className={style.titulo}>
                    <h1>Documentos 2023</h1>
                </div>

                <div className={style.fomento}>
                    <h1 className={style.titleFomento}>TF 03/2022</h1>
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

                <div className={style.fomento}>
                    <h1 className={style.titleFomento}>TF 03/2022</h1>
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
            </div>
        </>
    )
}