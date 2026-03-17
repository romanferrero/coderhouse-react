import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../services/firebase/firestore";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
        });
    }, []);

    return (
    
    );
}

export default ItemListContainer;