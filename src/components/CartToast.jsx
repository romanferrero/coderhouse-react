import { useCart } from '../context/CartContext'

function CartToast() {
  const { cartNotice, clearCartNotice } = useCart()

  if (!cartNotice) return null

  return (
    <div className="toast toast-top toast-end z-50">
      <div className="alert alert-success shadow-lg">
        <div className="flex items-start gap-2">
          <span className="font-semibold">{cartNotice.message}</span>
          <span className="text-sm opacity-90">{cartNotice.productTitle}</span>
        </div>
        <button className="btn btn-ghost btn-xs" onClick={clearCartNotice} aria-label="Cerrar aviso">
          x
        </button>
      </div>
    </div>
  )
}

export default CartToast