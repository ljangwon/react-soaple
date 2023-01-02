import React from 'react'
import Card from './Card'

function ProfileCard() {
  return (
    <>
      <Card title="Quokka" backgroundColor="#4ca04e">
        <p>안녕하세요, 쿼카입니다.</p>
        <p>저는 리액트를 사용하여서 개발하고 있습니다.</p>
      </Card>
      <Card title="MinJeong" backgroundColor="red">
        <p>안녕하세요, 민정입니다.</p>
        <p>저는 자바스크립트를 배우고 있습니다.</p>
      </Card>
    </>
  )
}

export default ProfileCard