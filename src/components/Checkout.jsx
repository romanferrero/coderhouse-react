import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createOrder } from '../firebase/db'
import { useCart } from '../context/CartContext'

function Checkout() {
    const { cartItems, totalPrice, clearCart } = useCart()
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })

    const isBuyerComplete = buyer.name.trim() && buyer.email.trim() && buyer.phone.trim()
    const canSubmit = cartItems.length > 0 && isBuyerComplete && !loading

    const handleInput = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        if (!canSubmit) return
        setLoading(true)

        try {
            const newOrderId = await createOrder({ buyer, cartItems, totalPrice })
            setOrderId(newOrderId)
            clearCart()
        } catch (error) {
            console.error('Error al crear la orden:', error)
        } finally {
            setLoading(false)
        }
    }

    if (orderId) {
        return (
            <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
                <div className="rounded-3xl border border-success/30 bg-success/10 p-6 text-center shadow-sm sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-success">Orden creada</p>
                    <h2 className="mt-3 text-2xl font-black sm:text-3xl">Compra confirmada</h2>
                    <p className="mt-3 text-sm opacity-85 sm:text-base">
                        Tu numero de orden es:
                    </p>
                    <p className="mt-2 inline-block rounded-xl border border-success/40 bg-white px-4 py-2 font-mono text-sm font-bold sm:text-base">
                        {orderId}
                    </p>
                    <p className="mt-4 text-sm opacity-80">
                        Guarda este numero para hacer seguimiento de tu pedido.
                    </p>

                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link to="/" className="btn btn-primary rounded-full px-8">
                            Volver al inicio
                        </Link>
                        <Link to="/shop-guide" className="btn btn-outline rounded-full px-8">
                            Ver guia de compra
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
            <header className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Checkout</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">Finalizar compra</h2>
                <p className="mt-2 text-sm opacity-80 sm:text-base">
                    Completa tus datos y confirma la orden.
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
                <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-6">
                    <h3 className="text-lg font-bold sm:text-xl">Datos del comprador</h3>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <label className="form-control sm:col-span-2">
                            <span className="label-text mb-1 font-medium">Nombre completo</span>
                            <input
                                name="name"
                                value={buyer.name}
                                placeholder="Ej: Sebastian Torre"
                                onChange={handleInput}
                                className="input input-bordered w-full"
                            />
                        </label>

                        <label className="form-control">
                            <span className="label-text mb-1 font-medium">Email</span>
                            <input
                                name="email"
                                type="email"
                                value={buyer.email}
                                placeholder="tu@email.com"
                                onChange={handleInput}
                                className="input input-bordered w-full"
                            />
                        </label>

                        <label className="form-control">
                            <span className="label-text mb-1 font-medium">Telefono</span>
                            <input
                                name="phone"
                                value={buyer.phone}
                                placeholder="11 1234 5678"
                                onChange={handleInput}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {!isBuyerComplete && (
                        <p className="mt-4 text-sm text-warning">
                            Completa nombre, email y telefono para confirmar la compra.
                        </p>
                    )}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                            onClick={handleSubmit}
                            disabled={!canSubmit}
                            className="btn btn-primary rounded-full px-8"
                        >
                            {loading ? 'Procesando...' : 'Confirmar compra'}
                        </button>
                        <Link to="/cart" className="btn btn-ghost rounded-full px-8">
                            Volver al carrito
                        </Link>
                    </div>
                </article>

                <aside className="h-fit rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm lg:sticky lg:top-24">
                    <h3 className="text-lg font-bold">Resumen</h3>
                    <div className="mt-4 space-y-3">
                        {cartItems.length === 0 && (
                            <p className="text-sm opacity-70">Tu carrito esta vacio.</p>
                        )}

                        {cartItems.map(item => (
                            <div key={item.id} className="rounded-xl border border-base-300/80 p-3">
                                <p className="text-sm font-semibold leading-tight">{item.title}</p>
                                <p className="mt-1 text-xs opacity-80">
                                    {item.quantity} x ${item.price}
                                </p>
                                <p className="mt-1 text-sm font-bold">${item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 border-t border-base-300 pt-4">
                        <p className="flex items-center justify-between text-sm">
                            <span>Total</span>
                            <span className="text-lg font-black">${totalPrice}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Checkout