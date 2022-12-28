import React, { useContext } from 'react'
import SettingsContext from './SettingsContext';

function Settings() {

  const settingsInfo = useContext(SettingsContext);

  return(
    <form style={{textAlign:'left'}}>
      <label> Work minutes: </label>
      <input
        type="number"
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        name="workMinutes"
        value={settingsInfo.workMinutes}
      />
      
      <br />
      <label> Break minutes: </label>
      <input
        type="number"
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        name="breakMinutes"
        value={settingsInfo.breakMinutes}
      />
      
    </form>
  )

}

export default Settings