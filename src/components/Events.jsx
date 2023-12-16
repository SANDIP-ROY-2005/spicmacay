import React from 'react'
import Card from './Card'
import virasat from './images/virasat.jpg'
import uttarayan from './images/uttarayan.jpg'
import anubhav from './images/anubhav.jpg'
import syours from './images/sincerely yours.jpg'

const Events = () => {
  return (
    <>
    <div id='events' className='grid items-center justify-center gap-y-4 p-4'>
      <Card title = 'Virasat' image = {virasat} content = 'Virasat is the event where we reconnect with Indian culture in a deep, enriching manner. For our audience to be absolutely bedazzled by the utmost heights of Indian classical art, music, and culture in its rich, diverse forms. Virasat is not just an event, it is a cultural experience.'/>
      <Card title = 'Uttarayan' image = {uttarayan} content = 'Virasat is the event where we reconnect with Indian culture in a deep, enriching manner. For our audience to be absolutely bedazzled by the utmost heights of Indian classical art, music, and culture in its rich, diverse forms. Virasat is not just an event, it is a cultural experience.'/>
      <Card title = 'Anubhav' image = {anubhav} content = 'Virasat is the event where we reconnect with Indian culture in a deep, enriching manner. For our audience to be absolutely bedazzled by the utmost heights of Indian classical art, music, and culture in its rich, diverse forms. Virasat is not just an event, it is a cultural experience.'/>
      <Card title = 'Sincerely Yours' image = {syours} content = 'Virasat is the event where we reconnect with Indian culture in a deep, enriching manner. For our audience to be absolutely bedazzled by the utmost heights of Indian classical art, music, and culture in its rich, diverse forms. Virasat is not just an event, it is a cultural experience.'/>
    
    </div>
    </>
  )
}

export default Events
