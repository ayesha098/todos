import React from 'react'
import Cal from './Cal'
import WeatherCom from './WeatherCom'

function Rightbar() {
  return (
    <aside className='bar navb bgcolor text-white'>
   <WeatherCom/>

      <Cal/>
  </aside>
  )
}

export default Rightbar
