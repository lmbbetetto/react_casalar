import style from './styles.module.css'
import IMG from '../../../../assets/vaolivre.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BtnBack } from '../../../component/buttonBack/back'

export function Vaolivre() {
    return (
        <>
            <div className={style.containerNot}>
                <BtnBack
                    link='/noticias'
                />
                <div className={style.container}>
                    <span>26/07/2023 - Andréia Oliveira</span>
                    <h1>Construção Cobertura Vão Livre</h1>
                    <img src={IMG} alt="foto noticia" />
                    <p>No mês de Março de 2.023 a Instituição deu início em uma Construção de Cobertura Vão Livre através da Emenda Parlamentar em parceria com a Secretaria do Desenvolvimento Social do Governo do Estado de São Paulo.
                        <br /><br />Tal objeto impactará diretamente para a disponibilização de um Espaço adequado para a realização de atividades pertinentes ao Acolhimento Institucional e ao Projeto CA.R.A., tais como: oficinas artísticas culturais, confraternizações, atividades lúdicas, festividades entre outros eventos propício ao local. Possibilitando uma participação maior da comunidade, permitindo assim um aumento significativo na capacidade de atendidos, viabilizando uma maior interação entre os pares e favorecendo a inclusão social.
                    </p>
                </div>
            </div>
        </>
    )
}

