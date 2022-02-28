import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LogoutButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 194,
    marginTop: 10,
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

export default function Header(props) {
  return (
    <header>
      <div>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/add'>add</Link>
        <Link to='/item/:id'>edit</Link>
        <Link to='/item'>item</Link>
        <Link to='/user'>user</Link>
        <LogoutButton onClick={props.handleLogout}>Logout</LogoutButton>
      </div>
    </header>
  )
}
