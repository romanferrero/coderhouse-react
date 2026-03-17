import { getFirestore, collection, getDocs } from "firebase/database";
import { app } from "./config";

export const db = getFirestore(app);

export const getProducts = async () => {

    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id });
    })

    return products;
};