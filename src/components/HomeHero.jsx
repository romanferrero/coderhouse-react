import Hero from './Hero'
import surfHeroImage from '../assets/surf.jpg'

function HomeHero() {
  return (
    <Hero
      title="Ruta del Surf"
      subtitle="Encontra tu tabla ideal"
      image={surfHeroImage}
      imageAlt="Wave Surf"
      showButton={true}
      buttonText="Ver tablas"
      buttonHref="#catalogo"
      heightClass="h-screen min-h-svh"
      imageClassName="blur-sm scale-110"
      overlayClassName="bg-black/30"
    />
  )
}

export default HomeHero