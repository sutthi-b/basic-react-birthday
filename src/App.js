import { useState, useEffect } from 'react';

import InputBirthday from './components/InputBirthday';
import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';

import './App.css'

function App() {
  //state
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [birthday, setBirthday] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime()/1000
    let timeCount = birthDate - now //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    )
    let minutes = Math.floor(
      (timeCount % (60 * 60)) / (60)
    )// let minutes
    let seconds = Math.floor(timeCount % (60))// let seconds

    setTime(
     {days,
      hours,
      minutes,
      seconds}
    ) 
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      let inputDay = 26
      let inputMonth = 11
      let year = 
        new Date().getMonth() + 1 > inputMonth
          ? new Date().getFullYear() + 1
          : new Date().getDate() > inputDay
          ? new Date().getFullYear() + 1
          : new Date().getFullYear();

      let birthday = new Date(`${year}/${inputMonth}/${inputDay}`).getTime()/1000;
      getCountdown(birthday);
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])


  return (
    <div className="container">
      {/* <InputBirthday /> */}
      <div className="countdown-app">
        <Header />
        <Content />
        <div className="countdown">
          <Card time={time.days} title="Days"/>
          <Card time={time.hours} title="Hours"/>
          <Card time={time.minutes} title="Minutes"/>
          <Card time={time.seconds} title="Seconds"/>
        </div>
      </div>
    </div>
  )
}

export default App;