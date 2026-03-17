import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from '../components/ItemListContainer'


function AppRouter () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter