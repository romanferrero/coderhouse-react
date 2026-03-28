import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-rs.png'

function Navbar({ categories }) {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300 px-4 md:px-8 shadow-md">
      
      <div className="navbar-start">
        <Link
          to="/shop-guide"
          className="btn btn-ghost rounded-full text-sm md:text-base font-medium hover:bg-primary hover:text-primary-content transition-all duration-200"
        >
          Guía de tablas
        </Link>
      </div>

      <div className='navbar-center'>
        <Link to="/">
          <img
            src={logoImg}
            alt="Ruta del Surf Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-200 hover:scale-110"
          />
        </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline btn-primary rounded-full px-5 hover:scale-105 transition-all duration-200"
          >
            Categorías
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu mt-3 w-56 rounded-2xl bg-base-100 p-3 shadow-xl border border-base-300"
          >
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  to={`/category/${cat}`}
                  className="rounded-lg hover:bg-primary hover:text-primary-content transition-colors duration-200"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar