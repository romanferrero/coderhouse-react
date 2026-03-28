import ItemList from './ItemList'
import HomeHero from './HomeHero'
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
        <>
        {!categoryName && <HomeHero />}
        <section id="catalogo" className="pt-8 pb-10">
            <ItemList items={items} />
        </section>
        </>
    )
}

export default ItemListContainer