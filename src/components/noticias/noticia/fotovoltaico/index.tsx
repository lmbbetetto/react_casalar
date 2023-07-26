import style from './styles.module.css'
import IMG from '../../../../assets/fotovoltaico.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BtnBack } from '../../../buttonBack/back'

export function Fotovoltaico() {
    return (
        <>
            <div className={style.containerNot}>
                <BtnBack 
                    link='/noticias'
                />
                <div className={style.container}>
                    <span>26/07/2023 - Andréia Oliveira</span>
                    <h1>Fotovoltaico</h1>
                    <img src={IMG} alt="foto noticia" />
                    <p>No mês de dezembro de 2.022 a Instituição fez a Implantação do Sistema de Energia Solar – Fotovoltaica, através da Emenda Parlamentar em parceria com a Secretaria do Desenvolvimento Social do Governo do Estado de São Paulo. Projeto este de grande impacto para a entidade, pois este sistema garantirá potência mais alta e produzirá mais kwh/mês em média anual, reduzindo assim os custos financeiros e vislumbrando uma possível economia, valores estes a serem revertidos para investimento e manutenção, suprindo assim as necessidades da OSC. </p>
                </div>
            </div>
        </>
    )
}