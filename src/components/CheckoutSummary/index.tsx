import { useContext } from 'react'
import style from './checkoutSummary.module.css'
import { CartContext } from '@/data/contexts/cart'

export default function CheckoutSummary() {
  const { cartSummary } = useContext(CartContext)

  function formatarCurrency(valor: number) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={style.checkoutSummary}>
      <div>
        <div className={style.containerSubtotal}>
          <div>
            <span className={style.descriptionSummary}>Subtotal</span>
            <span className={style.subtotal}>
              {formatarCurrency(cartSummary.subtotal)}
            </span>
          </div>
          <div>
            <span className={style.descriptionSummary}>Desconto</span>
            <span className={style.discount}>
              -{formatarCurrency(cartSummary.discount)}
            </span>
          </div>
          <div>
            <span className={style.descriptionSummary}>Entrega</span>
            <span className={style.shipping}>
              {formatarCurrency(cartSummary.shipping)}
            </span>
          </div>
        </div>

        <div className={style.containerTotal}>
          <span className={style.descriptionSummary}>Total</span>

          <div>
            <span className={style.total}>
              {formatarCurrency(cartSummary.total)}
            </span>
            <span className={style.installments}>
              em até <em>10x</em> de{' '}
              <em>{formatarCurrency(cartSummary.total / 10)}</em>
            </span>
          </div>
        </div>
      </div>
      <button className={style.buttonCheckout}>Ir para o pagamento</button>
    </div>
  )
}
