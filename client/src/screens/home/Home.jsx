import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const { currentUser, setAllItems, allItems, toggle, setToggle, tempItem } = props;

  useEffect(() => {
    console.log(allItems)
    if(toggle === 'DELETE'){
      setAllItems(allItems.filter(item => item.id !== Number(tempItem.id)))
      setToggle(prevToggle => prevToggle ='')
    } else if(toggle === 'POST'){
      allItems.push(tempItem)
      setAllItems(allItems)
      setToggle(prevToggle => prevToggle ='')
    } else if(toggle === 'PUT'){
      setAllItems(allItems.map(item => {
        if(item.id === Number(tempItem.id)){
          return tempItem
        } else {
          return item
        }
      }))
      setToggle(prevToggle => prevToggle ='')
    }
  },[toggle])

  return (
  <React.Fragment>
      <div className='flex-row-wrap'>
        <h4>
          Welcome!!! Home
        </h4>
        <h4>
          {currentUser?.first_name}
        </h4>
      </div>
      <div className='flex-row-wrap'>
        {allItems?.map(item => {
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
