import styles from './Attendee.module.scss'; // Match your actual filename
import { Header } from '../components/Header'; // Make sure Header is imported too!
import { AttendeeComp } from '../components/AttendeeComp';

export function Attendee() {
    return (
        <>
            <Header />
            <section className={styles['section-one']}>
              <h2>Event setup guide</h2>
              <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
            </section>
            <AttendeeComp />

            </>
    
    );
}