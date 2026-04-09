import { Link, useNavigate} from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

function Cart() {
  const {
    cartItems,
    addToCart,
    decrementItem,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice
  } = useCart()

  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8 text-center shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold">Tu carrito esta vacio</h1>
          <p className="mt-2 text-sm opacity-80">
            Explora el catalogo y agrega productos para comenzar tu compra.
          </p>
          <Link to="/" className="btn btn-primary mt-6 rounded-full px-8">
            Ir al catalogo
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Carrito de compras</h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl border border-base-300 object-contain p-1"
                  />
                  <div>
                    <h2 className="font-semibold text-sm sm:text-base">{item.title}</h2>
                    <p className="text-sm opacity-75">${item.price} c/u</p>
                  </div>
                </div>

                <ItemCount
                  value={item.quantity}
                  onDecrement={() => decrementItem(item.id)}
                  onIncrement={() => addToCart(item, 1)}
                  buttonClassName="btn-sm btn-outline"
                  valueClassName="btn-sm btn-ghost"
                  ariaLabelDecrement={`Restar una unidad de ${item.title}`}
                  ariaLabelIncrement={`Sumar una unidad de ${item.title}`}
                />

                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <p className="font-semibold">${item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-xl font-bold">Resumen</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="flex items-center justify-between text-base font-bold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </p>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="btn btn-primary mt-5 w-full rounded-full"
          >
            Finalizar compra
          </button>
          <button
            onClick={clearCart}
            className="btn btn-ghost mt-2 w-full rounded-full"
          >
            Vaciar carrito
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Cart
