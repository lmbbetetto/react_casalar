import style from './about.module.css'

export function About() {
    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <h1 className={style.titulo}>História</h1>
                    <p>A nossa organização foi legalmente constituída em 10 de dezembro de 1958, com o objetivo norteador de oferecer a Proteção Integral a crianças e adolescentes que vivenciassem as condições de abandono e desamparo familiar, acolhendo-os em regime de internato, hoje denominado Acolhimento Institucional.</p>
                    <p>No decorrer de seu caminhar, em sua extrema preocupação com o bem estar da criança e do adolescente, a Casa Lar no ano de 2006 tornou-se a Organização Certificadora do Projeto C.A.R.A. - Construindo Ações Reais para Adolescentes, que desde o ano de 2004 desenvolve o Serviço de Convivência e Fortalecimentos de Vínculos para Jovens com ênfase na Qualificação e Inserção no Mundo do Trabalho, conforme a Lei do Aprendiz nº. 10.097/2000.</p>
                </div>
                <div className={style.card}>
                    <h1 className={style.titulo}>Valores</h1>
                    <p>A nossa organização busca primeiramente constituir-se como um espaço de acolhida, escuta, construção e reconstrução de história, tendo como, princípios e valores norteadores o amor, o respeito, a igualdade, a honestidade, a dignidade, a paz e felicidade.</p>
                </div>
            </div>
        </>
    )
}