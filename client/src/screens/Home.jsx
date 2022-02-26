import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const { currentUser, allItems } = props;

  return <div>
      Welcome!!! Home
      {currentUser?.first_name}
      <Link to='/calendar'>Calendar</Link>
  </div>;
}
