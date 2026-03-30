import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 border-t border-base-300 bg-linear-to-b from-base-100 to-sky-50/50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <section>
            <span className="badge badge-outline border-primary/40 text-primary">Surf Store</span>
            <h3 className="mt-3 text-2xl font-black tracking-wide">Ruta del Surf</h3>
            <p className="mt-2 max-w-xs text-sm opacity-80">
              Equipamiento y seleccion de tablas para progresar con estilo, seguridad y mas olas.
            </p>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Navegacion</h4>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <Link onClick={handleGoTop} className="link link-hover w-fit">
                Inicio
              </Link>
              <Link to="/shop-guide" className="link link-hover w-fit">
                Guia de tablas
              </Link>
              <Link to="/cart" className="link link-hover w-fit">
                Carrito
              </Link>
            </nav>
          </section>
        </div>

        <div className="mt-8 border-t border-base-300/70 pt-5 text-xs opacity-70 md:flex md:items-center md:justify-between">
          <p>© {year} Ruta del Surf. Todos los derechos reservados.</p>
          <p className="mt-1 md:mt-0">Hecho para surfers que quieren progresar cada sesion.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer