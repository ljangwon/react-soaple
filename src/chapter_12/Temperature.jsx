import React from 'react'

const scaleNames = {
  c: '섭씨',
  f: '화씨'
}

function Temperature({ onTemperatureChange, scale, temperature }) {
  const handleChange = event => {
    onTemperatureChange(event.target.value)
  }
  return (
    <fieldset>
      <legend>
        온도를 입력해 주세요 (단위: {scaleNames[scale]})
      </legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  )
}

export default Temperature