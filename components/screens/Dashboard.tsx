import React from 'react'
import Header from './Header'
import Content from './Content'

function Dashboard() {
  return (
    <div className='h-screen w-full bg-[#ffffff]'>
      <Header />
      <Content />
    </div>
  )
}

export default Dashboard