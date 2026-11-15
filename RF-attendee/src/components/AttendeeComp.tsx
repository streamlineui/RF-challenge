import { Card } from '../components/Card'

import styles from './AttendeeComp.module.scss'
import PersonPortal from '../assets/images/PersonPortal.svg'


export function AttendeeComp() {
    return (
      //header styling
      <div className={styles.attendee}>
        <header className={styles.header}>
          <img src={PersonPortal}></img>
          <h3>Attendee</h3>
        </header>

        {/* step 1 */}
        <div className={styles.step}>
          <h4 className={styles.stepTitle}>
            <strong>Step 1:</strong> Base settings
          </h4>
          <div className={styles.itemRow}>
            <div className={styles.item}>
              <h4 className={styles.rowTitle}>General</h4>
              <p>Define Attendee types & attributes</p>
            </div>
          </div>
        </div>


      </div>
    );
  }

  export default AttendeeComp;