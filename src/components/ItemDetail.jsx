
function ItemDetail ({ item }) {
  return (
    <div className='flex flex-col lg:flex-row mx-20 mt-10'>
      <div className='border flex bg-white rounded justify-center'>
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <h2 className='text-2xl font-bold'>{item.title}</h2>
        <p className='text-green-400'>$ {item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail