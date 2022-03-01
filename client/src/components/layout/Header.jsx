import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Button } from '@mui/material';

const LogoutButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: 'green',
    fontFamily: 'Poppins, sans-serif',
    width: 100,
    marginTop: 10,
    '&:hover': {
        backgroundColor: 'blue',
    },
}));

export default function Header(props) {
  return (
    <header>
      <div>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/item/add'>add</Link>
        {/* <Link to='/item/:id'>edit</Link>
        <Link to='/item'>item</Link> */}
        <Link to='/user'>user</Link>
        <LogoutButton onClick={props.handleLogout}>Logout</LogoutButton>
      </div>
    </header>
  )
}
