import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from '../components/ItemListContainer'
import NavbarContainer from '../components/NavbarContainer'
import ShopGuide from '../components/ShopGuide'



function AppRouter () {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/shop-guide" element={<ShopGuide />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter