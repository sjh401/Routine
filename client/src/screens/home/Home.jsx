import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const { currentUser, allItems } = props;
  const today = new Date();
  const month = today.getMonth()
  const months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  

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
        <div className='flex-column'>
          <h3>
            Today's To-dos
          </h3>
          <div>
            {allItems.length && allItems.filter(item => {
              if(Number(item.to_do_date.substring(8,10)) === today.getDate()){
                return item
              }
              }).map(item => {
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
                      {item.completed === true ? 'complete' : 'incomplete'}
                    </div>
                  </div>
              )
            })}
            {
              (allItems.length && allItems.filter(item => {
                if(Number(item.to_do_date.substring(8,10)) === today.getDate()){
                  return item
                }
                }).length === 0) && 
                <div>
                  Nothing scheduled for {today.getMonth() +1}/{today.getDate()}
                </div>
            }
          </div>
        </div>
        <div>
          <h3>
            Upcoming for {months[month]}
          </h3>
          <div>
          
            {allItems.length && allItems.filter(item => {
              if(Number(item.to_do_date.substring(8,10)) > today.getDate() && Number(item.to_do_date.substring(5,7)) === month +1){
                return item
              }
              }).map(item => {
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
                        {item.completed === true ? 'complete' : 'incomplete'}
                      </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
  </React.Fragment>
  ) 
}
