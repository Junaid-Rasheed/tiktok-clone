import React from 'react'
import Lastweek from './Lastweek'
import Todolist from './Todolist'
import Proven from './Proven'

const Dashboard = () => {
  // your existing data and logic...

  return (
    <div className="p-6 mx-64">
      <Lastweek />
      <Todolist />
      <Proven />
    </div>
  )
}

export default Dashboard
