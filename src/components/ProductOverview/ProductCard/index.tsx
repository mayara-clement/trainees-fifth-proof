import ProductOverviewHeader from '../ProductCardHeader'
import ProductCardInfo from '../ProductCardInfo'
import ProductExtraServices from '../ProductExtraServices'
import style from './productCard.module.css'

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: string
    listPrice: string
    price: string
    shipping: {
      delivery: {
        days: string
        value?: string
      }
      pickup: boolean
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={style.productCard}>
      <ProductOverviewHeader />
      <ProductCardInfo product={product} />
      <ProductExtraServices />
    </article>
  )
}
