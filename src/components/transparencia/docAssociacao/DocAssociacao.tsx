import { BtnBack } from '../../component/buttonBack/back'
import { CardTransparencia } from '../cardTransparencia'
import style from './style.module.css'

import PDF1 from '../../../assets/transparencia/documentosAssociacao/ASSOCIACAO CASA LAR - BP 2022_ASSINADO.pdf'
import PDF2 from '../../../assets/transparencia/documentosAssociacao/ATA ALTERAÇÃO E CONSOLIDAÇÃO 10º ESTATUTO - nov 2022.pdf'
import PDF3 from '../../../assets/transparencia/documentosAssociacao/Ata eleição e posse 2023 2024.pdf'
import PDF4 from '../../../assets/transparencia/documentosAssociacao/TERMO DE POSSE ANO 2023.2024.pdf'

export function DocAssociacao() {
    const documents = [
        {
            title: 'Balanço Patrimonial',
            link: PDF1,
        },
        {
            title: 'Ata Alteração e Consolidação 10º Estatuto',
            link: PDF2,
        },
        {
            title: 'Ata Eleição e Posse - 2023 e 2024',
            link: PDF3,
        },
        {
            title: 'Termo de Posse - 2023 e 2024',
            link: PDF4,
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