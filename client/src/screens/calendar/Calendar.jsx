import React, { useState } from 'react';
import './Calendar.css'

export default function Calendar(props) {
  const today = new Date();
  const [ monthItems, setMonthItems ] = useState([]);
  const [ month, setMonth ] = useState(today.getMonth());
  
  const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysInMonth = {
    31: "Janurary March May July August October December ",
    30: "April June September November",
    28: "February",
    29: "February"
  }
  const dates = new Array(31).fill(0).map((element, index) => element = index+1)
// to getMonth then find first day of month to set column
  let column = new Date(`${today.getMonth()}/1/${today.getFullYear()}`)
  let row = 1;
  column = column.getDay()

  console.log(Math.ceil(column/6))
  return (
    <div>
      <h2>Monthly</h2>
      <h4>{months[today.getMonth()]}</h4>
      {/* calendar */}
      <div className='calendar-grid'>
        {dates.map((date, index) => {
          if(column>7){
            column = 1
            row+=1
          }
          return (
            <div style={
              {
                display:'grid',
                gridArea: `${row}/${column}/${row + 1}/${column+=1}`,
                border: 'solid black 1px'
                // width: '2vw'
              }}>
              {date}
            </div>
          )
        })}
      </div>
    </div>
  )
}
