import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-base-300 bg-base-100/90 backdrop-blur-sm mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-wide">Ruta del Surf</h3>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/" className="link link-hover" onClick={handleGoTop}>
              Inicio
            </Link>
            <Link to="/shop-guide" className="link link-hover">
              Guia de tablas
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-base-300 pt-4 text-xs opacity-70">
          <p>© {year} Ruta del Surf. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer