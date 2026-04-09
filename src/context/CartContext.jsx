import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [cartNotice, setCartNotice] = useState(null)

  useEffect(() => {
    if (!cartNotice) return

    const timeoutId = setTimeout(() => {
      setCartNotice(null)
    }, 2400)

    return () => clearTimeout(timeoutId)
  }, [cartNotice])

  const addToCart = (product, quantity = 1) => {
    const safeQty = Math.max(1, Number(quantity) || 1)

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + safeQty }
            : item
        )
      }

      return [...prevItems, { ...product, quantity: safeQty }]
    })

    setCartNotice({
      id: Date.now(),
      message: `${safeQty} ${safeQty === 1 ? 'item agregado' : 'items agregados'} al carrito`,
      productTitle: product.title
    })
  }

  const clearCartNotice = () => {
    setCartNotice(null)
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const decrementItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  )

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decrementItem,
    clearCart,
    totalItems,
    totalPrice,
    cartNotice,
    clearCartNotice
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }

  return context
}
