import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from '../SearchResult/SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays · 12 March to 30 March · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
                img="https://images.pexels.com/photos/3701434/pexels-photo-3701434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />$
            <SearchResult
                img="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"
            />

            <SearchResult
                img="https://images.pexels.com/photos/5997965/pexels-photo-5997965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/5998039/pexels-photo-5998039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/5824522/pexels-photo-5824522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                total="$480 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared b$throoms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                total="$650 total"
            />
    </div>
  )
}

export default SearchPage
