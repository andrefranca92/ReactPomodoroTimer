import React, { useContext } from 'react'
import BackButton from '../Buttons/BackButton';
import SettingsContext from './SettingsContext';

function Settings() {

  const settingsInfo = useContext(SettingsContext);

  return(
    <div style={{textAlign:'left'}}>
      <label> Work minutes: </label>
      <input
        type="number"
        onChange={event => settingsInfo.setWorkMinutes(event.target.value)}
        name="workMinutes"
        value={settingsInfo.workMinutes}
      />
      
      <br />
      <label> Break minutes: </label>
      <input
        type="number"
        onChange={event => settingsInfo.setBreakMinutes(event.target.value)}
        name="breakMinutes"
        value={settingsInfo.breakMinutes}
      />

      <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      
    </div>
  )

}

export default Settings