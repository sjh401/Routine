import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  return <div>
      Welcome!!! Home
      <Link to='/calendar'>Calendar</Link>
  </div>;
}
