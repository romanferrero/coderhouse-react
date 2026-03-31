import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link
      to="/cart"
      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-amber-300 bg-amber-50 px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-amber-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-100"
    >
      <span className="hidden sm:inline">Carrito</span>
      <span className="sm:hidden">🛒</span>
      <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">
        {totalItems}
      </span>
    </Link>
  )
}

export default CartWidget
