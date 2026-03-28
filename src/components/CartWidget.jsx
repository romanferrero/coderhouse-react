import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/cart" className="btn btn-outline btn-primary rounded-full px-4">
      Carrito
      <span className="badge badge-primary badge-sm">{totalItems}</span>
    </Link>
  )
}

export default CartWidget
