import Item from "./Item";

function ItemList({ items }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 px-4 sm:px-5 lg:px-6 mt-5'>
            {items.map(prod => <Item prod={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList