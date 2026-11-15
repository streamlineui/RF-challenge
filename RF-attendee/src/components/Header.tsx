
//import image
import styles from './Header.module.scss';

import LogoL from '../assets/images/LogoL.png'; 



export function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <h1>RainFocus Summit</h1>
          <div className={styles.dateLocation}>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
          </div>
          </div>
      </header>
    );
  }

  export default Header;