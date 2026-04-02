import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc,
    Timestamp,
}
    from "firebase/firestore"

import { app } from "./config";

export const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
    })

    return products
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"))
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name)
    })

    return categories
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
    })

    return products
}

export const getDetail = async (id) => {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}

export const createOrder = async ({ buyer, cartItems, totalPrice }) => {
    const order = {
        buyer,
        items: cartItems.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
        })),
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
    }

    const ordersRef = collection(db, "orders")
    const docRef = await addDoc(ordersRef, order)

    return docRef.id
}