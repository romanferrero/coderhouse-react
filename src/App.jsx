import AppRouter from './router/AppRouter'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <div>
        <AppRouter />
      </div>
    </CartProvider>
  )
}

export default App
