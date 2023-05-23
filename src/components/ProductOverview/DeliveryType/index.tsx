import style from './deliveryType.module.css'

export default function DeliveryType() {

  return(
    <div className={style.deliveryType}>
        <div>Forma de entrega</div>
        <div>
          <button>
            <input type="radio" />
            
          </button>
        </div>
    </div>
  )
} 