import Hero from './Hero'
import surfHeroImage from '../assets/surf.jpg'

function HomeHero() {
  return (
    <Hero
      title="Encontrá tu tabla ideal"
      subtitle="Calidad, diseño y rendimiento en cada tabla"
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