import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getDetail } from '../firebase/db'

function ItemDetailContainer () {
  const [item, setItem] = useState({
    title: '',
    price: 0,
    description: '',
    image: null
  })
  const { id } = useParams()
  
  useEffect(() => {
    getDetail(id)
    .then(detail => setItem(detail))
  }, [id])

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer