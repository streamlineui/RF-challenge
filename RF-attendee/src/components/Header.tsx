
//import image
import styles from './Header.module.scss';

import LogoL from '../assets/images/LogoL.png'; 



export function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <h1>Main Header Title</h1>
          <p>This is the first line of body text beneath the header.</p>
          <p>This is the second line of body text providing additional details.</p>
        </div>
      </header>
    );
  }

  export default Header;