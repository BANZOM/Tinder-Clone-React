import React from 'react'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import './Header.css';
import { IconButton, IconButtonClassKey } from '@mui/material';
import logo from './tinderlogo.svg';


function Header() {
  return (
    <div className='headerOfTinder'>

        <IconButton className='Header-icons'>
            <AddCircleOutlineSharpIcon    fontSize='large' />
        </IconButton>

        <img src= {logo} />
        <IconButton className='Header-icons'>
            <CallOutlinedIcon  fontSize='large' />
        </IconButton>

    </div>
  )
}

export default Header 