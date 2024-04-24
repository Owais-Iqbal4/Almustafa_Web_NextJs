import React from 'react'
import Sidebar from './Sidebar'
import LeftContainer from './LeftContainer'


function Content() {
  return (
    <div className='h-[94%] w-full bg-[#ffffff] flex'>
        <Sidebar />
        <LeftContainer />
    </div>
  )
}

export default Content