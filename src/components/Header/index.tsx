import styles from './Header.module.css'

import logo from '../../assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite Logo" />
    </header>
  )
}
export default Header
