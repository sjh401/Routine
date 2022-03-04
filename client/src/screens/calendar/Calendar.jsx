import React, { useState } from 'react';
import './Calendar.css'

export default function Calendar(props) {
  const { allItems, currentUser } = props;
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

  //presets for the calendar
  let column = new Date(`${today.getMonth()}/1/${today.getFullYear()}`).getDay()
  const dates = new Array(new Date(today.getFullYear(), today.getMonth() +1, 0).getDate()).fill(0).map((element, index) => element = index+1)
  let row = 1;

  let obj = new Object()
  console.log(allItems)
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
          obj[date] = `${row}/${column}/${row + 1}/${column+1}`

          return (
            <div 
            key={`${date} ${index}`}
            style={{
                display:'grid',
                gridArea: `${row}/${column}/${row + 1}/${column+=1}`,
                border: 'solid black 1px'
              }}>
              <div>
                {date}
              </div>
              <div style={{display:'grid', justifySelf:'center'}}>
                4
              </div>
            </div>
          )
        })}
        {allItems.length && allItems.map(item => {
            
          return (
            <div
              key={item.id}
              style={{
                display:'grid',
                gridArea: `${obj[Number(item.created_at.toString().split('-')[1])]}`
              }}
            >
              {item.title}
            </div>
          )
        })

        }
      </div>
    </div>
  )
}
