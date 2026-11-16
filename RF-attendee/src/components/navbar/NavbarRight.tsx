import styles from "./NavbarRight.module.scss";

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
      <div className={styles.search}> </div>

      <div className={styles.megaNavWrapper}> </div>
    </div>
  );
}
