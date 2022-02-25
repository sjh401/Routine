import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({currentUser}) {

  return <div>
      Welcome!!! Home
      {currentUser.first_name}
      <Link to='/calendar'>Calendar</Link>
  </div>;
}
