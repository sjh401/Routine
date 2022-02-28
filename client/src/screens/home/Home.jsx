import React, { useEffect, useState } from 'react';
import './Home.css'

export default function Home(props) {
  const { currentUser, allItems } = props;
  const [ userItems, setUserItems ] = useState([])
  console.log(allItems)
  console.log(currentUser)

  useEffect(() => {
    const items = allItems.filter(element => element.user_id === currentUser?.id)
    setUserItems(items)
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
        {userItems?.map(item => {
          return (
            <div 
              key={`${item.id} ${item.title}`}
              className='flex-column'
            >
              <h4>
                {item.title}
              </h4>
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
