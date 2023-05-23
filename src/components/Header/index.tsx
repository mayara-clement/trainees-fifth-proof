import LogoIcon from '@/images/icon/header/LogoIcon'
import style from './header.module.css'
import HelpIcon from '@/images/icon/header/HelpIcon'
import NotificationIcon from '@/images/icon/header/NotificationIcon'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={style.headerLogo}>
          <LogoIcon /> <span>Trainee Store</span>
        </div>
        <div className={style.headerNav}>
          <HelpIcon />
          <NotificationIcon />
          <Image src="/user.png" width={32} height={32} alt="user" />
          <span>Gustavo Silva</span>
        </div>
      </div>
      <div className={style.headerBottom}>
        <div className={style.headerBottomContainer}>
          <h1>Resumo do pedido</h1>
          <button>Continuar comprando</button>
        </div>
      </div>
    </header>
  )
}
