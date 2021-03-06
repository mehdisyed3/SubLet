import React, { useState } from 'react'
import './Banner.css'
import {Button } from '@material-ui/core'
import SearchDate from '../SearchDate/SearchDate'
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch,setShowSearch]=useState(false)
  const history = useHistory()
  return (
    <div className='banner'>
      <div className='banner__search'>
      {showSearch && <SearchDate />}
      
        <Button 
          className='banner__searchButton'
          variant='outlined'
          onClick={()=> setShowSearch(!showSearch)} >

            { showSearch ? 'Hide' : 'Search Dates'}
          
          </Button>
          

      </div>
      <div className='banner__info'>
        <h1>Find a home away from home</h1>
        <h5> Experience the beauty of local culture and traditions. </h5>
        <Button onClick={()=> history.push('/search')} variant='outlined'>
          Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner
