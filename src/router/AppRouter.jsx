import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import NavbarContainer from '../components/NavbarContainer'
import ShopGuide from '../components/ShopGuide'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ScrollToTop from '../components/ScrollToTop'
import Checkout from '../components/Checkout'



function AppRouter () {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <NavbarContainer />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/shop-guide" element={<ShopGuide />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter