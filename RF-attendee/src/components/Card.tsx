import LogicArrow from '../assets/images/LogicArrow.svg';
import styles from './Card.module.scss';

// 1. Define an interface for your props
interface CardProps {
    title?: string;
    description?: string;
    icon?: string;
    className?: string;
    centered?: boolean;
    hidden?: boolean;
  }
  
  export function Card({ title, description, icon, className, centered, hidden }: CardProps) {
    const classes = [styles.card, centered && styles.centered, hidden && styles.hidden, className]
      .filter(Boolean)
      .join(' ');
  
    return (
      <div className={classes}>
        <div className={styles.cardHeader}>
          <img src={icon || LogicArrow} alt="" className={styles.avatar} />
          {title && <h4>{title}</h4>}
        </div>
        <p>{description || "Start by creating a general registration workflow"}</p>
      </div>
    );
  }