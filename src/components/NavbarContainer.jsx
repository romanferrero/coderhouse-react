import { useState, useEffect } from 'react'
import { getCategories } from '../firebase/db'
import Navbar from './Navbar'

function NavbarContainer () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
     .then(cats => setCategories(cats))
  }, [])

  return <Navbar categories={categories} />
  
}

export default NavbarContainer