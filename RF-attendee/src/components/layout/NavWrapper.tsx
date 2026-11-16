import { type ReactNode } from "react";
import styles from "./NavWrapper.module.scss";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRight from "../navbar/NavbarRight";

interface NavWrapperProps {
  children: ReactNode;
}

export function NavWrapper({ children }: NavWrapperProps) {
  return (
    <div className={styles.navWrapper}>
      <aside className={styles.sidebarContainer}>
        <NavbarLeft />
        <NavbarRight />
      </aside>

    </div>
  );
}