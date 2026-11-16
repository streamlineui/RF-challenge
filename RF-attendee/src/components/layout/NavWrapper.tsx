import type { ReactNode } from 'react';

import styles from "./NavWrapper.module.scss";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRight from "../navbar/NavbarRight";

export function NavWrapper() {
  return (
    <div className={styles.NavWrapper}>
      {/* Left side: Sticky Navigation */}
      <aside className={styles.sidebarContainer}>
        <NavbarLeft />
        <NavbarRight />
      </aside>
      </div>

  )
      }

    