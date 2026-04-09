import AppRouter from './router/AppRouter'
import { CartProvider } from './context/CartContext'
import CartToast from './components/CartToast'

function App() {

  return (
    <CartProvider>
      <div>
        <AppRouter />
        <CartToast />
      </div>
    </CartProvider>
  )
}

export default App
