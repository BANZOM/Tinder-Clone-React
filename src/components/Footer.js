import React from 'react'
import './Footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';



function Footer() {
  return (
    <div className = 'footer-modification' >
{/* /* inserting icons and stuffs then to be edited on css file */ }
        <IconButton className='closeButton'>
            <CloseIcon fontSize='large'   />
        </IconButton>

        <IconButton className='star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>

        <IconButton className='flash'>
            <FlashOnIcon fontSize='large' />
        </IconButton>

        <IconButton className='fav'>
            <FavoriteIcon  fontSize='large' />
        </IconButton>

        <IconButton className='replay' >
            <ReplayIcon fontSize='large' />
        </IconButton>
        

    </div>
  )
}

export default Footer