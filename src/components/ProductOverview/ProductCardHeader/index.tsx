import style from './productCardHeader.module.css'

export default function ProductCardHeader() {

  return(
    <header className={style.productCardHeader}>
      <span>Produto</span>
      <span>Valor unitário</span>
      <span>Quantidade</span>
    </header>
  )
} 