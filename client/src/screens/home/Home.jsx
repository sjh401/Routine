import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const { currentUser, allItems, toggle, setToggle, tempItem } = props;
  const [ items, setItems ] = useState([])

  useEffect(() => {
    console.log('home useEffect')
    console.log(toggle)
    console.log(allItems)
    console.log(tempItem)
    if(toggle === 'DELETE'){
      setItems(allItems.filter(item => item.id !== Number(tempItem.id)))
      setToggle(prevToggle => prevToggle ='')
    } else if(toggle === 'POST'){
      allItems.push(tempItem)
      setItems(allItems)
      setToggle(prevToggle => prevToggle ='')
    } else if(toggle === 'PUT'){
      setItems(allItems.map(item => {
        if(item.id === Number(tempItem.id)){
          return tempItem
        } else {
          return item
        }
      }))
      setToggle(prevToggle => prevToggle ='')
    } else {
      setItems(allItems)
    }
  },[allItems])
  return (
  <React.Fragment>
      <div className='flex-row-wrap'>
        <h4>
          Welcome!!! Home
        </h4>
        {currentUser?.first_name}
      </div>
      <div className='flex-row-wrap'>
        {items?.map(item => {
          return (
            <div 
                key={`${item.id} ${item.title}`}
                className='flex-column'
              >
            <Link to={`/item/${item.id}`}>
                <h4>
                  {item.title}
                </h4>
            </Link>
                <div>
                  {item.completed === true ? 'complete' : 'not'}
                </div>
              </div>
          )
        })}
      </div>
  </React.Fragment>
  ) 
}
