
import styles from "./App.module.scss";
import { Attendee } from "./pages/Attendee";
import NavbarLeft from "./components/navbar/NavbarLeft.js";
import NavbarRight from "./components/navbar/NavbarRight.jsx";

import { PageWrapper } from "./components/layout/PageWrapper.js";
import { NavWrapper } from "./components/layout/NavWrapper.js";

/*
  const [count, setCount] = useState(0)

  */

// src/App.jsx
export default function App() {
  return (
    <div className={styles.pageF}>
      <NavWrapper >
      <NavbarLeft />
      <NavbarRight />
        </NavWrapper >


      <PageWrapper>
        <Attendee />
      </PageWrapper>
    </div>
  );
}
