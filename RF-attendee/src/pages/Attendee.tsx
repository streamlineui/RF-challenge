import Header from '../components/Header'; 
import { PageWrapper } from '../components/layout/PageWrapper';
import styles from './Attendee.module.scss'
import { AttendeeComp } from '../components/AttendeeComp'



export function Attendee() {
    return (

        <PageWrapper>

            <Header />

            <section className={styles['section-one']}>
            <h2>Event setup guide</h2>
            <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
            </section>

            <AttendeeComp />

    
        </PageWrapper>
       
    );
  }