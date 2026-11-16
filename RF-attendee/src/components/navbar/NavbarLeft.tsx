import RfLogo from "../../assets/images/RfLogo.svg";
import OrgLogo from "../../assets/images/OrgLogo.png";
import Avatar from "../../assets/images/Avatar.svg";

//import image
import styles from "./NavbarLeft.module.scss";

export default function NavbarLeft() {
  return (
    <div className={styles.NavBarLeft}>
      <div className={styles.top}>
        <div className={styles.NavLogo}>
          <img src={RfLogo} alt="RfLogo" className={styles.logo} />
        </div>
        <div className={styles.NavOrg}>
          <img src={OrgLogo} alt="OrgLogo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.NavUser}>
          <img src={Avatar} alt="Avatar" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}


