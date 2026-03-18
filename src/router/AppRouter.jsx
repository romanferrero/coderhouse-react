import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from '../components/ItemListContainer'
import NavbarContainer from '../components/NavbarContainer'



function AppRouter () {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter