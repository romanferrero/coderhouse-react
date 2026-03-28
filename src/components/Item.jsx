import { useNavigate } from 'react-router-dom'

function Item({ prod }) {
  const navigate = useNavigate()
  const maxDescLength = 120

  const fullDescription = prod?.description ?? ''
  const shortDescription =
    fullDescription.length > maxDescLength
      ? fullDescription.slice(0, maxDescLength).trimEnd() + '...'
      : fullDescription

  return (
    <div className="card h-full bg-base-100 border border-info/20 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <figure className="bg-sky-50 h-64 overflow-hidden">
        <img
          src={prod.image}
          alt={prod.title}
          className="h-full w-full object-contain p-5 hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base-content text-lg min-h-14">
          {prod.title}
        </h2>

        <p
          className="text-sm text-base-content/70 min-h-18"
          title={fullDescription}
        >
          {shortDescription}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-primary font-bold text-lg">
            ${prod.price}
          </span>

          <button
            className="btn btn-info text-white rounded-full px-5"
            onClick={() => navigate(`/product/${prod.id}`)}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item