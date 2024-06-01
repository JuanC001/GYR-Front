import { Link } from 'react-router-dom'
import './Experience.css'

const experienceText = {
    text: 'Hemos llevado a cabo exitosamente estructuraciones de procesos, estudios de costos y tarifas, auditorias externas y diagnósticos de viabilidad a diferentes entes territoriales y prestadores de servicios públicos.'
}


export const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-content">
                <h2>Nuestra <span>Experiencia</span></h2>
                <div>
                    <p>{experienceText.text}</p>
                    <Link to="/experiencia" className="experience-link">Leer más</Link>
                </div>

            </div>
        </div >
    )
}
