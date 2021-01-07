
import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import  './Home.css'

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
            <Card
                src="https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Experience the Countyside"
                description="=Enjoy the sound of nature, and breath fresh air."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="3 Bedroom Luxury Apartment in Toronto"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Penthouse in Toronto"
                description="Enjoy the amazing sights of Toronto with this stunning penthouse"
                price="$350/night"
            />
            <Card
                src="https://images.pexels.com/photos/5998033/pexels-photo-5998033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />
            </div>
    </div>
  )
}

export default Home
