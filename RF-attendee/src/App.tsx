import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import { Attendee } from './pages/attendee/Attendee.jsx';


function App() {
/*
  const [count, setCount] = useState(0)

  */

  return (
    <main>
      <Attendee/>
    </main>
  );
}

export default App
