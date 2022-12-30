import React from 'react'

const students = [
  {
    id: 1,
    name: 'quokka'
  },
  {
    id: 2,
    name: 'rabbit'
  },
  {
    id: 3,
    name: 'bebe'
  },
  {
    id: 4,
    name: 'kiki'
  }
]

function AttendanceBook() {
  return (
    <ul>
      {students.map(student => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}

export default AttendanceBook