import ItemList from './ItemList'
import HomeHero from './HomeHero'
import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
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

    useEffect(() => {
        setSearchTerm('')
        setSelectedCategory('all')
    }, [categoryName])

    const categories = useMemo(() => {
        return [...new Set(items.map(prod => prod.category).filter(Boolean))]
    }, [items])

    const filteredItems = useMemo(() => {
        const normalizedTerm = searchTerm.trim().toLowerCase()

        return items.filter(prod => {
            const byName = prod.title?.toLowerCase().includes(normalizedTerm)
            const byCategory = selectedCategory === 'all' || prod.category === selectedCategory
            return byName && byCategory
        })
    }, [items, searchTerm, selectedCategory])

    return (
        <>
        {!categoryName && <HomeHero />}
        {!categoryName && (
            <section className="px-5 pt-8">
                <div className="mx-auto max-w-5xl rounded-3xl border border-info/20 bg-base-100/80 p-5 shadow-sm backdrop-blur-sm md:p-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
                        <label className="form-control w-full">
                            <span className="label-text mb-2 font-medium">Buscar por nombre</span>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Ej: Tabla Fish"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </label>

                        <label className="form-control w-full">
                            <span className="label-text mb-2 font-medium">Filtrar por categoría</span>
                            <select
                                className="select select-bordered w-full"
                                value={selectedCategory}
                                onChange={(event) => setSelectedCategory(event.target.value)}
                            >
                                <option value="all">Todas las categorías</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            </section>
        )}
        <section id="catalogo" className="pt-8 pb-10">
            <ItemList items={filteredItems} />
        </section>
        </>
    )
}

export default ItemListContainer