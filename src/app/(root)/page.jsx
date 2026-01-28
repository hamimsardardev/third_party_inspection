import React from 'react'
import Banner from '../components/Banner'
import Chooseme from '../components/Chooseme'
import Ourstory from '../components/Ourstory'
import Service from '../components/Service'

const Page = () => {
  return (
    <div>
      <Banner/>
      <Ourstory/>
      <Chooseme/>
      <Service/>
    </div>
  )
}

export default Page