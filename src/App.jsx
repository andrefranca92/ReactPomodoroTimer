import './App.css'
import Timer from './Components/Timer'
import Settings from './Components/Settings'
import SettingsContext from './Components/SettingsContext';

import {useState} from "react"

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  
  return (
    <main>
      <SettingsContext.Provider value = {{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }} />

      {showSettings ? <Settings /> : <Timer />}
    </main>
  )
}

export default App
