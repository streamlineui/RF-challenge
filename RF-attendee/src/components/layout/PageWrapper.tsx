import type { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  );
}