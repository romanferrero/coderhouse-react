import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-rs.png'
import CartWidget from './CartWidget'

function Navbar({ categories }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navButtonClass =
    'inline-flex items-center justify-center h-9 md:h-10 px-3 md:px-4 text-xs sm:text-sm font-medium rounded-lg border border-base-300 bg-transparent hover:bg-base-200 hover:border-base-content/20 transition-all duration-200'

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-base-100/80 backdrop-blur-md shadow-md border-b border-base-300'
          : 'bg-base-100/95 shadow-sm'
        }`}
    >
      <div className="navbar max-w-7xl mx-auto px-3 sm:px-4 md:px-8 min-h-16 md:min-h-20">
        <div className="navbar-start">
          <Link
            to="/shop-guide"
            className={navButtonClass}
          >
            <span className="hidden sm:inline">Guía de compra</span>
            <span className="sm:hidden">Guía</span>
          </Link>
        </div>

        <div className="navbar-center">
          <Link to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 group">
            <img
              src={logoImg}
              alt="Wave Surf Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden md:block">
              <p className="text-lg md:text-xl font-extrabold tracking-[0.2em] uppercase leading-none">
                Ruta del Surf
              </p>
              <p className="text-xs text-base-content/60 tracking-[0.3em] uppercase">
                Ride the wave
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hover:scale-105 transition-transform duration-200">
              <CartWidget />
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`${navButtonClass} cursor-pointer hover:bg-base-200 hover:shadow-sm active:scale-95`}
              >
                <span className="hidden sm:inline">Categorías</span>
                <span className="sm:hidden">Cat.</span>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-3 w-52 sm:w-60 rounded-xl bg-base-100 p-2 shadow-xl border border-base-300"
              >
                <li className="sm:hidden">
                  <Link
                    to="/shop-guide"
                    className="rounded-lg px-3 py-2 hover:bg-base-200 transition-colors duration-200"
                  >
                    Guía de compra
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/category/${cat}`}
                      className="rounded-lg px-3 py-2 hover:bg-base-200 transition-colors duration-200"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar