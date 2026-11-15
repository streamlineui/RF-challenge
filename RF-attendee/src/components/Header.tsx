
//import image
import styles from './Header.module.scss';
import Button from './Button';

import LogoL from '../assets/images/LogoL.png'; 



export function Header() {
    return (
      <header className={styles.header}>

        <img
          src={LogoL}
          alt="RainForest Logo"
          className="img"
        />

        <div className={styles.content}>
          <h1>RainFocus Summit</h1>
          <div className={styles.dateLocation}>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
          </div>
          </div>

          <Button />
      </header>
    );
  }

  export default Header;