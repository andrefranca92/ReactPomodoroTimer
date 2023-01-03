import React, { useContext } from 'react'
import BackButton from '../Buttons/BackButton';
import SettingsContext from './SettingsContext';

function Settings() {

  const settingsInfo = useContext(SettingsContext);

  return(
    <div className='text-center p-2'>

      <h1 className='text-2xl font-bold leading-loose'> Settings </h1>

      <div className='p-1'>
        <label> Work minutes: </label>
        <input
          type="number"
          onChange={event => settingsInfo.setWorkMinutes(event.target.value)}
          name="workMinutes"
          value={settingsInfo.workMinutes}
        />
      </div>
      
      <div className='p-1'>
        <label> Break minutes: </label>
        <input
          type="number"
          onChange={event => settingsInfo.setBreakMinutes(event.target.value)}
          name="breakMinutes"
          value={settingsInfo.breakMinutes}
        />
      </div>

      <div className='p-2'>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      </div>
      
    </div>
  )
}

export default Settings