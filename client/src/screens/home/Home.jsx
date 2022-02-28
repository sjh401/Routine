import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const { currentUser, allItems } = props;
  const [ items, setItems ] = useState([])
  console.log(allItems)

  return (
  <React.Fragment>
      <div className='flex-row-wrap'>
        <h4>
          Welcome!!! Home
        </h4>
        {currentUser?.first_name}
        <Link to='/calendar'>Calendar</Link>
        <Link to='/add'>add</Link>
        <Link to='/item/:id'>edit</Link>
        <Link to='/item'>item</Link>
        <Link to='/user'>user</Link>
      </div>
      <div className='flex-row-wrap'>
        {allItems?.map(item => {
          return (
            <div key={`${item.id} ${item.title}`}>
              <h4>
                {item.title}
              </h4>
              <div>
                {item.description}
              </div>
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
