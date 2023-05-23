import Image from 'next/image'
import style from './productCardInfo.module.css'
import TranshIcon from '@/images/icon/icon-trash'
import { list } from 'postcss'
import { useContext } from 'react'
import { CartContext } from '@/data/contexts/cart'

interface ProductCardInfoProps {
  product: {
    id: string
    name: string
    image: string
    listPrice: string
    price: string
    shipping: {
      pickup: boolean
    }
  }
}
const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function calculateDiscount(price: string, listPrice: string) {
  return Math.round(((+listPrice - +price) * 100) / +listPrice)
}

export default function ProductCardInfo({ product }: ProductCardInfoProps) {
  const { removeFromCart } = useContext(CartContext)
  return (
    <div className={style.productCardInfo}>
      <div className={style.infoProduct}>
        <Image src={product.image} width={40} height={40} alt="product image" />
        <div>
          <span className={style.infoProductName}>{product.name}</span>
          <span className={style.infoProductPick}>
            {product.shipping.pickup ? (
              <span>
                Disponível em <em>CD São Paulo</em>
              </span>
            ) : (
              <span>Indisponível</span>
            )}
          </span>
        </div>
      </div>

      <div className={style.priceWrapper}>
        <span className={style.listPrice}>{product.listPrice}</span>
        <span className={style.price}>{product.price}</span>
        <span className={style.discount}>
          -{calculateDiscount(product.price, product.listPrice)}%
        </span>
      </div>

      <div className={style.quantity}>
        <select>
          {OPTIONS.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            )
          })}
        </select>

        <button onClick={() => removeFromCart(product.id)}>
          <TranshIcon />
        </button>
      </div>
    </div>
  )
}
