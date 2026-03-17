import { useNavigate } from "react-router"

function Item({ prod }) {
    const navigate = useNavigate()

    return (
        <div className="card border bg-zinc-950">
            <figure>
                <img
                    src={prod.image}
                    alt={prod.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{prod.title}</h2>
                <p>{prod.description}</p>
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