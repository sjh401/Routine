import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestingItemEdit from './TestingItemEdit';

export default function ItemDetail(props) {
  const { allItems, putItem, deleteItem, setToggle, setTempItem, currentUser, tempItem } = props;
  const id = useParams();
  const [ item, setItem ] = useState([]);
  const [ editing, setEditing ] = useState(false)

  useEffect(() => {
    setItem(allItems.length ? allItems.filter(element=> element.id === Number(id.id)) : [])
  },[allItems])
console.log(editing)
  return(
    <React.Fragment>
      <div>

      </div>
      <div>
        <div>
          {item[0]?.title}
        </div>
        <div>
          {item[0]?.completed === true ? 'complete' : 'incomplete'}
        </div>
        <div>
          <button onClick={() => {
            setEditing(prevEditing => prevEditing = !prevEditing)
            }}>
            edit
          </button>
        </div>
        {editing === true && 
          <TestingItemEdit 
          item={item}
          item_id={id}
          putItem={putItem}
          deleteItem={deleteItem}
          currentUser={currentUser}
          setToggle={setToggle}
          setTempItem={setTempItem}
          tempItem={tempItem}
          editing={editing}
          />
        }
      </div>
    </React.Fragment>
  ) 
}
