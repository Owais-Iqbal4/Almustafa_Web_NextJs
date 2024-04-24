import React from 'react'
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });
function Header() {
  return (
    <div className='w-full h-[6%] bg-[#ffffff] border border-[#D9D9D9] flex justify-between gap-[20%] pl-[2%] pr-[1%] ' >
      <div className=' w-[4.2%] flex justify-center items-center'>
        <img src="/logo.png" alt="" className='' />
      </div>
      <div className=' h-[100%] w-[80%] flex items-center px-[.2%] gap-[2%]'>
        <div className='h-[70%] w-[80%] flex items-center gap-[.5%] bg-[#E6FFED] px-2 rounded-[53px]'>
          <img src="/search.png" alt="" className='w-[2.4%]' />
          <input type="search" className='outline-none focus:outline-none h-[60%] w-full mx-0.5 bg-[#E6FFED] text-[80%] placeholder:text-[#00CB56] text-[#00CB56]' placeholder='Search' />
        </div>
        <div className='h-[100%] flex items-center'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2%' }} className='cursor-pointer'>
            <img src="/cart-icon.png" className='w-[35%]' />
            <p className={`${montserrat.className} font-medium text-[.8vw]`}>My car</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4%' }} className='cursor-pointer'>
            <img src="/user.png" alt="" className='w-[17%]' />
            <p className={`${montserrat.className} font-medium text-[.8vw]`} >My account</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header