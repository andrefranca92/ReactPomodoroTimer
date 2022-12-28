import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext } from 'react';

import PlayButton from '../Buttons/PlayButton'
import PauseButton from '../Buttons/PauseButton'
import SettingsButton from '../Buttons/SettingsButton'
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';
const trailColor = 'rgba(255,255,255,0.2)';

function Timer() {

  const settingsInfo = useContext(SettingsContext)

  return (
    <div>
      <CircularProgressbar value={60} text={`${60}%`} styles = {buildStyles({
        textColor:'#fff',
        pathColor: red,
        trailColor: trailColor
      })} />
      

      <div style={{marginTop:'20px'}}>
        <PlayButton />
        <PauseButton />
      </div>

      <div style={{marginTop:'20px'}}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>

    </div>
  )
}

export default Timer;