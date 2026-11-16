import styles from "./NavbarRight.module.scss";

import search from "../../assets/images/search.svg";
import circleGray from "../../assets/images/circleGray.svg";

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

      <div className={styles.megaNavWrapper}>
        <div className={styles.default}>
          <div className={styles.navItem}>
            <img src={circleGray}></img>
            Guide
          </div>
        </div>
      </div>


      <div className={styles.megaNavWrapper}>
        <div className={styles.default}>
          <div className={styles.navItemSelected}>
            <img src={circleGray}></img>
            Attendees
          </div>
          <div className={styles.navItemOpen}>
          <div className={styles.navItem}>Attendees</div>
          <div className={styles.navItem}>Attendee types</div>
          <div className={styles.navItem}>Packages</div>
          <div className={styles.navItem}>Reg Codes</div>
          <div className={styles.navItem}>Discounts</div>
          </div>
         


        </div>
      </div>

      <div className={styles.megaNavWrapper}>
        <div className={styles.default}>
          <div className={styles.navItem}>
            <img src={circleGray}></img>
            Content
          </div>
        </div>
      </div>

      <div className={styles.megaNavWrapper}>
        <div className={styles.default}>
          <div className={styles.navItem}>
            <img src={circleGray}></img>
            Exhibitors
          </div>
        </div>
      </div>




    </div>
  );
}
