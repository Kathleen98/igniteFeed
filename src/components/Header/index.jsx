import style from './style.module.css'
import igniteLogo from '../../assets/ignite.logo.svg'

const Header = () => {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
    </header>
  )
}

export default Header
