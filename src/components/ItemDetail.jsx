function ItemDetail({ item }) {
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

          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary rounded-full px-8">
              Comprar
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemDetail