import React, { useEffect, useState } from 'react';
import {FormControl, InputLabel, Select, MenuItem, InputBase} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import './Calendar.css'

export default function Calendar(props) {
  const DateInput = styled(Select)(() => ({
    backgroundColor: 'rgba(242, 233, 228, 0)',
    borderBottomColor: '#4a4369',
    '&:hover':{
      borderBottomColor: 'red',
    },
    '&:focused': {
      background: '#22223b',
      backgroundColor: 'rgba(242, 233, 228, 0)',
      borderBottomColor: '#4a4369',
    },
  }))
  const { allItems, currentUser } = props;
  const today = new Date();
  const [ monthItems, setMonthItems ] = useState([]);
  const [ month, setMonth ] = useState(today.getMonth());
  const [ year, setYear ]= useState(today.getFullYear());
  const [ dates, setDates ] = useState(new Array(new Date(today.getFullYear(), today.getMonth() +1, 0).getDate()).fill(0).map((element, index) => element = index+1))
  // const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  //presets for the calendar
  let column = new Date(`${month+1}/1/${year}`).getDay()
  let row = 1;

  let calGrid = new Array(42).fill(0);
  let calGridRow = 1;
  let calGridColumn = 1;
  let yearInc = calGrid.length/-2;

  let dayTaskCount = {};
  let obj = new Object();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonth(prevMonth => prevMonth = value);
  };
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
      <div className='flex-row-evenly-center'>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel 
              id="month-selector"
              style={{
                color: '#4a4e69'
              }}
              >
                Month
              </InputLabel>
            <DateInput
              labelId="month-selector"
              value={month}
              onChange={handleChange}
              label="Month"
              style={{
                '&:focused':{
                  borderBottomColor: '#4a4369'
                }
              }}
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
            </DateInput>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="year-selector">Year</InputLabel>
            <Select
              labelId="year-selector"
              value={year}
              onChange={(e)=> setYear(prevYear => prevYear = e.target.value)}
              label="Year"
            >
              {calGrid.map((element, index)=> {
                return(
                  <MenuItem 
                    key={`${element} + ${index}`}
                    value={Number(today.getFullYear()) + (yearInc+=1)}
                  >
                    {Number(today.getFullYear()) + (yearInc)}
                  </MenuItem>
                )
              })}
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
                  gridArea: `${row}/${column}/${row + 1}/${column+=1}`,
                  alignContent: 'space-between',
                  zIndex: 1,
                }}>
                <div className='date-link'>
                  <Link to={`/calendar/${date}-${month+1}-${year}`}>
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
          {calGrid.map((element, index) => {
            if(calGridColumn>7){
              calGridColumn = 1
              calGridRow+=1
            }
            if(calGridRow <= row){
              return (
                <div 
                key={`${element} - ${index}`}
                style={{
                    display:'grid',
                    height: 90,
                    width: 170,
                    gridArea: `${calGridRow}/${calGridColumn}/${calGridRow + 1}/${calGridColumn+=1}`,
                    borderLeft: 'solid #22223b 1px',
                    borderBottom: 'solid #22223b 1px',
                    borderTop: calGridRow === 1 ? 'solid #22223b 1px': '',
                    borderRight: calGridColumn === 8 ? 'solid #22223b 1px' : '',
                  }}>
                </div>
            )}
          })
          }
        </div>
      </div>
    </div>
  )
}
