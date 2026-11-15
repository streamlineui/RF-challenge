import LogicArrow from '../assets/images/LogicArrow.svg';
import styles from './Card.module.scss';

// 1. Define an interface for your props
interface CardProps {
    title?: string;
    description?: string;
    icon?: string;
    className?: string;
  }

// 2. Destructure className and merge it into the root div
export function Card({ title, description, icon, className }: CardProps) {
    return (
      <div className={`${styles.card} ${className || ''}`}>
        <div className={styles.cardHeader}>
          {/* Uses the passed icon prop, or falls back to LogicArrow if none is provided */}
          <img src={icon || LogicArrow} alt="icon" className={styles.avatar} />
          {/* Uses the passed title prop, with a safe fallback */}
          <h4>{title || "Attendee Registration"}</h4>
        </div>
        {/* Uses the passed description prop, with a safe fallback */}
        <p>{description || "Start by creating a general registration workflow"}</p>
      </div>
    );
  }