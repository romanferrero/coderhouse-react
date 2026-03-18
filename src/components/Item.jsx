import { useNavigate } from "react-router"

function Item({ prod }) {
    const navigate = useNavigate()
    const maxDescLength = 120
    const fullDescription = prod?.description ?? ''
    const shortDescription = fullDescription.length > maxDescLength
        ? fullDescription.slice(0, maxDescLength).trimEnd() + '...'
        : fullDescription

    return (
        <div className="card border bg-zinc-950">
            <figure>
                <img
                    src={prod.image}
                    alt={prod.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{prod.title}</h2>
                <p title={fullDescription}>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
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