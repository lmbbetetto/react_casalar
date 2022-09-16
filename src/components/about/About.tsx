import './about.css'
import logocasa from '../../assets/logocasa.png'

function About() {

    return (
        <div className='container about__container'>
            <div className='about__name'>
                <h2>Casa Lar Cel. Juventino Pereira</h2>
            </div>

            <div className='about__img'>
                <img src={logocasa} alt="logo casalar" />
            </div>
        </div>
    )
}

export default About