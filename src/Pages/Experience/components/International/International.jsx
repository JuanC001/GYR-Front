
import './International.css'
import { Argentina } from './Argentina/Argentina'

export const International = () => {
  return (
    <div className='international__projects'>
      <h2 >
        Proyectos Internacionales
      </h2>
      <div className='international__projects_container'>
        <Argentina />
      </div>
    </div>
  )
}
