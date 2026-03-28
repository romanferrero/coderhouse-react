import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from '../components/ItemListContainer'
import NavbarContainer from '../components/NavbarContainer'
import ShopGuide from '../components/ShopGuide'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Footer from '../components/Footer'



function AppRouter () {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavbarContainer />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/shop-guide" element={<ShopGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter