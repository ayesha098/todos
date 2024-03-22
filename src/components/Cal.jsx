import React, {useState} from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
function Cal() {
    const [date, setDate] = useState(new Date());

  return (
    <>
     
      
      <div className='calendar-container bgSec mt-4 mx-3 pb-4'>
        <Calendar onChange={setDate} value={date} />
      </div>
      
    
    </>
  )
}

export default Cal
