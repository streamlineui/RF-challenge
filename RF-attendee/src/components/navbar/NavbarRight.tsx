import styles from "./NavbarRight.module.scss";

import search from "../../assets/images/search.svg"

export default function NavbarRight() {
  return (
    <div className={styles.NavbarRight}>
      <header>RainFocus Summit</header>

      <div className={styles.details}>
        <p>Lehi,UT </p> &nbsp;
        <p>•</p>
        &nbsp;
        <p> December 15th</p>
      </div>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <img src={search}></img>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.megaNavWrapper}> </div>
    </div>
  );
}
