import { useContext } from 'react'
import ProductCard from './ProductCard'
import ProductOverviewHeader from './ProductCardHeader'
import style from './productOverview.module.css'
import { CartContext } from '@/data/contexts/cart'

export default function ProductOverview() {
  const { cartProducts } = useContext(CartContext)
  return (
    <div className={style.productOverview}>
      {cartProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
