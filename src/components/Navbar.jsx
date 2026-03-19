import { Link } from 'react-router-dom'

function Navbar ({ categories }) {
  return (
    <div className="navbar bg-primary shadow-sm">

      <div className="navbar-start">
        <Link to='/shop-guide' className="btn btn-ghost text-xl">
          Guía de tablas
        </Link>
      </div>

      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost text-xl">
          Wave Surf
        </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Categorías
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 mt-2 w-52 p-2 shadow"
          >
            {categories.map(cat => (
              <li key={cat}>
                <Link to={`/category/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar