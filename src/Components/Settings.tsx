import React from 'react'

function Settings() {

  const [settingsData, setSettingsData] = React.useState(
    {
      workMinutes: 25,
      breakMinutes: 5
    }
  )


  function handleChange(event) {
    
    console.log(event)
    const {name, value, type, checked} = event.target

    setSettingsData(prevSettingsData => {
      return {
        ...prevSettingsData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return(
    <form style={{textAlign:'left'}}>
      <label> Work minutes: </label>
      <input
        type="number"
        onChange={handleChange}
        name="workMinutes"
        value={settingsData.workMinutes}
      />
      
      <br />
      <label> Break minutes: </label>
      <input
        type="number"
        onChange={handleChange}
        name="breakMinutes"
        value={settingsData.breakMinutes}
      />
      
    </form>
  )

}

export default Settings