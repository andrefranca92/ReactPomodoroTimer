import React from 'react'
import ReactSlider from 'react-slider'

function Settings() {
  return(
    <div style={{textAlign:'left'}}>
      <label> Work minutes: </label>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
      

      <label> Break minutes: </label>
      
    </div>
  )

}

export default Settings