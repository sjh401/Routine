import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ItemDetail(props) {
  const { allItems } = props;
  const id = useParams();
  const [ item, setItem ] = useState([]);

  useEffect(() => {
    setItem(allItems.filter(element=> element.id === Number(id.id)))
  },[allItems])


  return(
    <React.Fragment>
      <div>
        <Link to='/home'>Home</Link>    
      </div>
      <div>
              <h4>
                {item[0]?.title}
              </h4>
              <div>
                {item[0]?.completed === true ? 'complete' : 'not'}
              </div>
      </div>
    </React.Fragment>
  ) 
}
