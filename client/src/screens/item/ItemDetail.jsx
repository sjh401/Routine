import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ItemDetail(props) {
  const { allItems } = props;
  const id = useParams();
  const [ item, setItem ] = useState([]);

  useEffect(() => {
    setItem(allItems.length ? allItems.filter(element=> element.id === Number(id.id)) : [])
  },[allItems])

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
        <Link to={`/item/edit/${item[0]?.id}`}>
          Edit
        </Link>
      </div>
    </React.Fragment>
  ) 
}
