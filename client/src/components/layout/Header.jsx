import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Button } from '@mui/material';

const LogoutButton = styled(Button)(({ theme }) => ({
    color: '#f2e9e4',
    backgroundColor: '#4a4e69',
    fontFamily: 'Poppins, sans-serif',
    width: 100,
    '&:hover': {
        backgroundColor: '#9a8c98',
        color: '#f2e9e4'
    },
}));

export default function Header(props) {
  return (
    <header className='flex-row-evenly-center'>
      { !props.currentUser ?
        <></>
        :
        <>
            <Link to='/home'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/item/add'>add</Link>
            <Link to='/user'>user</Link>
            {props.currentUser && <LogoutButton onClick={props.handleLogout}>Logout</LogoutButton>}
        </>
        }
  </header>
  )
}
