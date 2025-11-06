import React from 'react'
import Lastweek from './Lastweek'
import Todolist from './Todolist'
import Proven from './Proven'
import Conversion from './Conversion'
import TikTokShopSuccessPath from './TikTokShopSuccessPath'
import Sales from './Sales'

const Dashboard = () => {
  // your existing data and logic...

  return (
    <div className="p-6 mx-52">
      <Lastweek />
      <Todolist />
      <Conversion />
      <Proven />
      <TikTokShopSuccessPath />
      <Sales />
    </div>
  )
}

export default Dashboard
