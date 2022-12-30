import React, { useState } from 'react'

function SignUp() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("여자")

  const handleChangeName = event => {
    setName(event.target.value)
  }

  const handleChangeGender = event => {
    setGender(event.target.value)
  }

  const handleSubmit = event => {
    alert(`이름: ${name} 성별: ${gender}`)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        <select value={gender} onChange={handleChangeGender}>
          <option value="여자">여자</option>
          <option value="남자">남자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default SignUp