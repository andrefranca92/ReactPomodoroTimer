import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext, useState, useEffect, useRef } from 'react';

import PlayButton from '../Buttons/PlayButton'
import PauseButton from '../Buttons/PauseButton'
import SettingsButton from '../Buttons/SettingsButton'
import SettingsContext from './SettingsContext';

const red = '#ef4444';
const green = '#22c55e';
const trailColor = '#334155';

function Timer() {

  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); //work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  // Initialize timer with the settings value
  function initTimer() {
    setSecondsLeft((mode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60);
  } 

  // Decrements 1 second
  function tick() {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }

  // ???
  useEffect(() => {
    
    //Switches to the next mode: work -> break, break -> work
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSeconds = (mode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
  
      setMode(nextMode)
      modeRef.current = nextMode;
      
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = secondsLeft;
    }

    secondsLeftRef.current = (mode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
    setSecondsLeft(secondsLeftRef.current)

    // runs at an interval of 1 second
    const interval = setInterval(() => {
      
      if(isPausedRef.current) {
        return
      }
      
      if (secondsLeftRef.current === 0) {
        return switchMode()
      }

      tick();

    }, 1000)

    return () => clearInterval(interval);

  }, [settingsInfo])

  // Sets percentage
  const totalSeconds = (mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60)
  const percentage = Math.round(secondsLeft / totalSeconds * 100)

  // Sets timer text
  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) seconds = '0' + seconds

  return (
    <div>

      <h1 className='text-4xl font-bold text-center leading-loose'> Pomodoro Timer </h1>
      <div className='text-l text-center uppercase p-1'> 
        <p> {mode} time </p>
        <p> {percentage}% </p>
      </div>

      <div className='p-12 max-w-xl block m-auto'>
        <CircularProgressbar 
          value={percentage} 
          text={minutes + ':' + seconds} 
          styles = {buildStyles({
            textColor:'#fff',
            pathColor: mode === 'work' ? red : green,
            trailColor: trailColor
        })} />
      </div>
      
      <div className='p-2 text-center'>
        {isPaused 
          ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false}}/> 
          : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true}}/>
        }
      </div>

      <div className='p-2 text-center'>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>

    </div>
  )
}

export default Timer;