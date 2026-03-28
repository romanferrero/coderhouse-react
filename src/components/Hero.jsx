import heroImg from '../assets/surf.jpg'

function Hero() {
  return (
    <div className="relative h-75 w-full overflow-hidden">

      <img
        src={heroImg}
        alt="Wave Surf"
        className="w-full h-full object-cover blur-sm scale-110"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-2">
          Ruta del Surf
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          Encontrá tu tabla ideal
        </p>
      </div>

    </div>
  )
}

export default Hero