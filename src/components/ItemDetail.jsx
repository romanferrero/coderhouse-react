import { useState } from 'react'
import { useCart } from '../context/CartContext'

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(item, quantity)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">

        <div className="flex-1 bg-white rounded-2xl shadow-md border border-base-300 flex items-center justify-center p-6">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-100 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">
              {item.title}
            </h2>

            <p className="text-2xl font-extrabold text-primary mb-5">
              ${item.price}
            </p>

            <div className="max-h-60 overflow-y-auto pr-2">
              <p className="text-base-content/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="join">
              <button
                className="btn join-item btn-outline"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="btn join-item btn-ghost pointer-events-none">
                {quantity}
              </span>
              <button
                className="btn join-item btn-outline"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button className="btn btn-primary rounded-full px-8" onClick={handleAddToCart}>
              Agregar al carrito
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemDetail