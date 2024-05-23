import './Home.css'

import { Services } from './components/Services/Services'
import { Success } from './components/Success/Success'
import { Hero } from './components/Hero/Hero'
import { Intro } from './components/Introduction/Intro'

import Banner1 from '../../assets/images/gallery/imagen_1.jpg'

export const Home = () => {

  return (
    <main className='home-main'>

      <section >
        <Hero />
      </section>

      <section>
        <Intro />
      </section>

      <Banner text={'Asesorias Integrales en proyectos de servicios públicos y soluciones ambientales'} image={Banner1} />

      <section>
        <Services />
      </section>
      <section>
        <Success />
      </section>
    </main>
  )
}

const Banner = ({ text, image }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-cover">
        <p>{text}</p>
      </div>
    </div>
  )
}
