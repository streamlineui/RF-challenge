import LogicArrow from '../assets/images/LogicArrow.svg'
import styles from './Card.module.scss'

export function Card() {
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={LogicArrow} alt="arrow" className={styles.avatar} />
          <h4>Attendee Registration</h4>
        </div>
        <p>Start by creating a general registration workflow</p>
      </div>
    );
  }

