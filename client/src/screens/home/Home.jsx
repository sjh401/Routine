import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const { currentUser, allItems } = props;
  const [ items, setItems ] = useState([])

  useEffect(() => {
    setItems(allItems)
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
