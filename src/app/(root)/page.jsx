import React from 'react'
import Banner from '../components/Banner'
import Chooseme from '../components/Chooseme'
import Ourstory from '../components/Ourstory'
import Service from '../components/Service'
import Whatwedo from '../components/Whatwedo'
import Audit from '../components/Audit'

const Page = () => {
  return (
    <div>
      <Banner/>
      <Ourstory/>
      <Chooseme/>
      <Whatwedo/>
      <Service/>
      <Audit/>
    </div>
  )
}

export default Page