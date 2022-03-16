import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css'

export default function Calendar(props) {
  const { allItems, currentUser } = props;
  const today = new Date();
  const [ monthItems, setMonthItems ] = useState([]);
  const [ month, setMonth ] = useState(today.getMonth());
  
// TODO when I add a drop down to change the month
  // const changeMonth = (month) => {
  //   setMonth(month)
  // }

  
  const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  //presets for the calendar
  let column = new Date(`${today.getMonth()}/1/${today.getFullYear()}`).getDay()
  const dates = new Array(new Date(today.getFullYear(), today.getMonth() +1, 0).getDate()).fill(0).map((element, index) => element = index+1)
  let row = 1;
  
  const dayTaskCount = {}
  let obj = new Object()
  console.log(allItems)
  
  useEffect(() => {
    const monthlyItems = allItems.filter(item => new Date(item.to_do_date).getMonth() === month)
    setMonthItems(monthlyItems)

  },[month])

  const taskCount = (array) => {
    array.forEach(item => {
      let date = new Date(item.to_do_date).getDate() + 1
      if(!dayTaskCount[date]){
        dayTaskCount[date] = 1;
      } else {
        dayTaskCount[date] += 1;
      }
    })
  }
  
  taskCount(monthItems)

  return (
    <div>
      <h2>Monthly</h2>
      <h4>{months[today.getMonth()]}</h4>
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
                <Link to={`/calendar/${date}`}>{date}</Link>
              </div>
              <div>
                {dayTaskCount[date] > 0 ? dayTaskCount[date]: ''}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
