import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 mt-5'>
            {products.map(prod => <Item prod={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList