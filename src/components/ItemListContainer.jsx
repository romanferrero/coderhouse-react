import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            getProductsByCategory(categoryName)
                .then(prods => setItems(prods))
        } else {
            getProducts()
                .then(prods => setItems(prods))
        }
    }, [categoryName])

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer