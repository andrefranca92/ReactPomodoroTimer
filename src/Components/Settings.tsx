import React, { useContext } from 'react'
import SettingsContext from './SettingsContext';

function Settings() {

  const settingsInfo = useContext(SettingsContext);

  function handleMinuteInput(event) {
    console.log(settingsInfo);
    const {name, value} = event.target

    if (name === "workMinutes") {
      settingsInfo.setWorkMinutes(value);
    }

    else if (name === "breakMinutes") {
      settingsInfo.setBreakMinutes(value);
    }
  }

  return(
    <form style={{textAlign:'left'}}>
      <label> Work minutes: </label>
      <input
        type="number"
        onChange={handleMinuteInput}
        name="workMinutes"
        value={settingsInfo.workMinutes}
      />
      
      <br />
      <label> Break minutes: </label>
      <input
        type="number"
        onChange={handleMinuteInput}
        name="breakMinutes"
        value={settingsInfo.breakMinutes}
      />
      
    </form>
  )

}

export default Settings