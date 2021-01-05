import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar } from '@material-ui/core'



//<img src='https://image.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg' alt='' />
function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src='https://image.freepik.com/free-vector/urban-building-skyline-panoramic-night_107791-1696.jpg' alt='' />

      <div className='header__inputSearch' >

        <input type='text' />
        <SearchIcon />
      </div>

      <div className='header__right' >
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />

      </div>

    </div>
  )
}

export default Header
