import { Card } from "./Card";
import LogicArrow from "../assets/images/LogicArrow.svg";
import styles from "./AttendeeComp.module.scss";
import addCircle from "../assets/images/addCircle.svg";
import PersonPortal from "../assets/images/PersonPortal.svg";
import Computer from "../assets/images/Computer.svg";

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
        {/* step 1 item 1 */}
        <div className={`${styles.itemRow} ${styles.hideLastChild}`}>
          <div className={styles.item}>
            <h4 className={styles.rowTitle}>General</h4>
            <p>Define Attendee types & attributes</p>
          </div>
          {/* step 1 item 2 */}
          <div className={styles.item}>
            <h4 className={styles.rowTitle}>Title</h4>
            <p>
              Description that explains the value goes here. Description that
              explains the value goes here.{" "}
            </p>
          </div>
          {/* step 1 item 3 */}
          <div className={styles.item}>
            <h4 className={styles.rowTitle}>Title</h4>
            <p>
              Description that explains the value goes here. Description that
              explains the value goes here.{" "}
            </p>
          </div>
          {/* step 1 item 4 */}
          <div className={styles.item}>
            <h4 className={styles.rowTitle}>General</h4>
            <p>Define Attendee types & attributes</p>
          </div>
        </div>
        {/* step 2 */}

        <h4 className={styles.stepTitle}>
          <strong>Step 2:</strong> Build registration workflows.
        </h4>

        <div className={styles.Rows}>
          {/* no map function here bc content repeats, array creation unecessary */}
          <div className={styles.Row}>
            <Card title="Attendee Registration" />
            <Card title="Attendee Registration" />
            <Card title="Attendee Registration" />
          </div>

          <div className={styles.Row}>
            <Card
              description="Add Registration Workflow"
              icon={addCircle}
              centered
            />

            <Card
              description="Add Registration Workflow"
              icon={addCircle}
              centered
              hidden
            />

            <Card
              description="Add Registration Workflow"
              icon={addCircle}
              centered
              hidden
            />
          </div>
        </div>

        <h4 className={styles.stepTitle}>
          <strong>Step 3:</strong> Design post-registration experiences.
        </h4>

        <div className={styles.Rows}>
          {/* no map function here bc content repeats, array creation unecessary */}
          <div className={styles.Row}>
            <Card
              title="Attendee Portal"
              description="Manage the portal that attendees will see after they’ve register for your event."
              icon={Computer}
            />

            <Card
              title="Attendee Portal"
              description="Manage the portal that attendees will see after they’ve register for your event."
              icon={Computer}
              hidden
            />

<Card
              title="Attendee Portal"
              description="Manage the portal that attendees will see after they’ve register for your event."
              icon={Computer}
              hidden
            />



          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendeeComp;
