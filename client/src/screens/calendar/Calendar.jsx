import React, { useEffect, useState } from 'react';
import {FormControl, InputLabel, Select, MenuItem, InputBase, Input} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import './Calendar.css'

const MonthInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#fe9e4',
  '&:focus': {
    background: '#22223b',
    backgroundColor: '#22223b',
  },
  '& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input': {
    backgroundColor: '#22223b',
  }
}))
export default function Calendar(props) {
  const { allItems, currentUser } = props;
  const today = new Date();
  const [ monthItems, setMonthItems ] = useState([]);
  const [ month, setMonth ] = useState(today.getMonth());
  const [ dates, setDates ] = useState(new Array(new Date(today.getFullYear(), today.getMonth() +1, 0).getDate()).fill(0).map((element, index) => element = index+1))
  
  // const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  //presets for the calendar
  let column = new Date(`${month+1}/1/${today.getFullYear()}`).getDay()
  // let dates = new Array(new Date(today.getFullYear(), today.getMonth() +1, 0).getDate()).fill(0).map((element, index) => element = index+1)
  let row = 1;

  let dayTaskCount = {}
  let obj = new Object()

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonth(prevMonth => prevMonth = value)
  }

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
  useEffect(() => {
    const monthlyItems = allItems.filter(item => new Date(item.to_do_date).getMonth() === month)
    dayTaskCount = {}
    obj = {}
    setMonthItems(monthlyItems)
    setDates(prevDates => prevDates = new Array(new Date(today.getFullYear(), month + 1, 0).getDate()).fill(0).map((element, index) => element = index+1))
  },[month])

  taskCount(monthItems)

  return (
    <div>
      <div className='flex-column-center-center'>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="month-selector">Month</InputLabel>
            <Select
              labelId="month-selector"
              value={month}
              onChange={handleChange}
              label="Age"
              // root={<MonthInput />}
              // input={<MonthInput />}
            >
              <MenuItem value={0}>Janurary</MenuItem> 
              <MenuItem value={1}>February</MenuItem> 
              <MenuItem value={2}>March</MenuItem> 
              <MenuItem value={3}>April</MenuItem>
              <MenuItem value={4}>May</MenuItem>
              <MenuItem value={5}>June</MenuItem>
              <MenuItem value={6}>July</MenuItem>
              <MenuItem value={7}>August</MenuItem>
              <MenuItem value={8}>September</MenuItem>
              <MenuItem value={9}>October</MenuItem>
              <MenuItem value={10}>November</MenuItem>
              <MenuItem value={11}>December</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='flex-row-evenly-center'>
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
                  height: 90,
                  width: 170,
                  marginRight: index === dates.length - 1 ? -1:0,
                  gridArea: `${row}/${column}/${row + 1}/${column+=1}`,
                  borderLeft: 'solid #22223b 1px',
                  borderBottom: row === 1 ? '' : 'solid #22223b 1px',
                  borderTop: row < 3 ? 'solid #22223b 1px': '',
                  borderRight: column === 8 || index === dates.length - 1 ? 'solid #22223b 1px' : '',
                  alignContent: 'space-between'
                }}>
                <div className='date-link'>
                  <Link to={`/calendar/${date}`}>
                    {date}
                  </Link>
                </div >
                {dayTaskCount[date] > 0 ? 
                <div style={{display: 'flex', justifySelf: 'center', alignSelf:'flex-start', height: 60}}>
                    {dayTaskCount[date]}
                </div>
                : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
