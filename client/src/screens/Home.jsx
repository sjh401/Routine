import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const { currentUser, allItems } = props;

  return <div>
      Welcome!!! Home
      {currentUser?.first_name}
      <Link to='/calendar'>Calendar</Link>
      <Link to='/add'>add</Link>
      <Link to='/item/:id'>edit</Link>
      <Link to='/item'>item</Link>
      <Link to='/user'>user</Link>
  </div>;
}
