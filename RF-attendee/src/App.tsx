import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import styles from "./App.module.scss";
import { Attendee } from "./pages/Attendee";
import NavbarLeft from "./components/navbar/NavbarLeft.js";
import NavbarRight from "./components/navbar/NavbarRight.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
