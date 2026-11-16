import { type ReactNode } from "react";
import styles from "./NavWrapper.module.scss";

interface NavWrapperProps {
  children: ReactNode;
}

export function NavWrapper({ children }: NavWrapperProps) {
  return (
    <div className={styles.navWrapper}>
      <aside className={styles.sidebarContainer}>
  
        {children}
   
      </aside>

    </div>
  );
}