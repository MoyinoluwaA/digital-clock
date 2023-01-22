import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [time, setTime] = useState({
  //   minutes: 0,
  //   hours: 0,
  //   seconds: 0
  // })
  const [date, setDate] = useState(new Date())
  

  useEffect(() => {
    const clock = setInterval(() => {
      const date = new Date();
      // setTime({
      //   minutes: date.getMinutes(),
      //   hours: date.getHours(),
      //   seconds: date.getSeconds()
      // })
      setDate(date);
    }, 1000)

    return () => clearInterval(clock)
  }, [])

  return (
    <div className='clock'>
      {date.toLocaleTimeString()}
      {/* <span>{time.hours}:</span>
      <span>{time.minutes}</span>
      <span> {time.seconds}</span> */}
    </div>
  );
}

export default App;
