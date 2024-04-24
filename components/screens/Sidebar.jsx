import React, { useState } from 'react'
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });
function Sidebar() {
  const [selectedCategory1_Id, setSelectedCategory1_Id] = useState(null)
  const [selectedCategory1_Id_1_text, setselectedCategory1_Id_1_text] = useState('')
  const [selectedCategory1_Id_2_text, setselectedCategory1_Id_2_text] = useState('')
  const [selectedCategory2, setSelectedCategory2] = useState([])
  const [selectedCategory3, setSelectedCategory3] = useState([])
  let array = [
    {
      text: 'Fruit & Vegetables',
      id: 12,
      category2: [
        {
          text: 'Leaves',
          category3: [
            {
              text: 'Spinach'
            },
            {
              text: 'Coriander'
            },
            {
              text: 'Mint'
            },
            {
              text: 'Curry leaves'
            },
            {
              text: 'Broccoli'
            },
            {
              text: 'Cabbage'
            },
            {
              text: 'Category level 3'
            },
          ]
        },
        {
          text: 'Fruits'
        },
        {
          text: 'Pods'
        },
        {
          text: 'Flowers'
        },
        {
          text: 'Seeds'
        },
        {
          text: 'Roots'
        },
        {
          text: 'Category level 2'
        },
      ],



    },
    {
      text: 'Diary & Eggs',
      id: 1

    },
    {
      text: 'Frozen',
      id: 2

    },
    {
      text: 'Electronics',
      id: 3

    },
    {
      text: 'Petcare',
      id: 4

    },
    {
      text: 'Household',
      id: 5

    },
    {
      text: 'Mom, Category level 1',
      id: 6

    },
    {
      text: 'Fruit & Vegetables',
      id: 7

    },
    {
      text: 'Category level 1',
      id: 8

    },
    {
      text: 'Category level 1',
      id: 9

    },
    {
      text: 'Category level 1',
      id: 10

    },
    {
      text: 'Category level 1',
      id: 11

    },
    {
      text: 'Category level 1',
      id: 12

    },
  ]


  const onCategoryClick = (categoryId) => {
    setSelectedCategory1_Id(categoryId)
    let category2 = array.find((item) => item.id == categoryId);
    setselectedCategory1_Id_1_text(category2?.text)
    setSelectedCategory2(category2.category2)
  }
  const onClickCategory2 = (category_2_Text) => {
    setselectedCategory1_Id_2_text(category_2_Text)
    let category3 = selectedCategory2?.find((item) => item.text == category_2_Text);
    setSelectedCategory3(category3.category3)
  }
  const onCloseSidebar = () => {
    setSelectedCategory1_Id(null)
    setselectedCategory1_Id_1_text('')
    setselectedCategory1_Id_2_text('')
    setSelectedCategory2([])
    setSelectedCategory3([])
  }
  return (
    <>

      <div className={`w-[25%] h-[100%] bg-[#ffffff] border border-[#D9D9D9] pl-[10px] ${selectedCategory1_Id ? 'h-screen absolute top-0 left-0 z-auto' : 'h-[100%]'}`}>
        {selectedCategory1_Id && <div className={`h-[8%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer`}>

          <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
            <p className={`${montserrat.className} font-medium text-[.8vw]`}>Categories</p>
            <img src="/sidebar-cross.png" className='w-[3%]' onClick={onCloseSidebar} />
          </div>
        </div>}
        {
          array.map((item, index) => {
            return (
              <div className={`h-[7%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer ${selectedCategory1_Id && selectedCategory1_Id === item?.id ? 'border-[#00CB56] bg-[#E6FFED]' : 'border-[#C4C4C4] bg-[#ffffff]'}`} key={index} onClick={() => { onCategoryClick(item.id) }}>

                <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
                  <p className={`${montserrat.className} font-medium text-[.8vw]`}>{item.text}</p>
                  {selectedCategory1_Id == item.id ?
                    <img src="/right-arrow-green.png" className='w-[1.5%]' />
                    :
                    <img src="/right-arrow.png" className='w-[1.5%]' />
                  }
                </div>
              </div>
            )
          })


        }
        {/* <div className='h-[7%] w-full  border-b-[1px] border-[#C4C4C4] flex justify-center items-center cursor-pointer' >

              <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
                <p className={`${montserrat.className} font-medium text-[.8vw]`}>item</p>
                <img src="/right-arrow.png" className='w-[1.5%]' />
              </div>
            </div> */}
      </div>


      {selectedCategory1_Id_1_text && <div className={`w-[25%] h-[100%] bg-[#ffffff] border border-[#D9D9D9] pl-[10px] ${selectedCategory1_Id ? 'h-screen absolute top-0 left-[25%] z-auto' : 'h-[100%]'}`}>
        {selectedCategory1_Id && <div className={`h-[8%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer`}>

          <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
            <p className={`${montserrat.className} font-medium text-[.8vw]`}>{selectedCategory1_Id_1_text}</p>
            {/* <img src="/sidebar-cross.png" className='w-[3%]' onClick={() => { setSelectedCategory1_Id(null) }} /> */}
          </div>
        </div>}
        {
          selectedCategory2?.map((item, index) => {
            return (
              <div className={`h-[7%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer ${selectedCategory1_Id_2_text && selectedCategory1_Id_2_text === item?.text ? 'border-[#00CB56] bg-[#E6FFED]' : 'border-[#C4C4C4] bg-[#ffffff]'}`} key={index} onClick={() => { onClickCategory2(item?.text) }}>

                <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
                  <p className={`${montserrat.className} font-medium text-[.8vw]`}>{item.text}</p>
                  {selectedCategory1_Id == item.id ?
                    <img src="/right-arrow-green.png" className='w-[1.5%]' />
                    :
                    <img src="/right-arrow.png" className='w-[1.5%]' />
                  }
                </div>
              </div>
            )
          })


        }

      </div>}


      {selectedCategory1_Id_2_text && <div className={`w-[25%] h-[100%] bg-[#ffffff] border border-[#D9D9D9] pl-[10px] ${selectedCategory1_Id ? 'h-screen absolute top-0 left-[50%] z-auto' : 'h-[100%]'}`}>
        {selectedCategory1_Id && <div className={`h-[8%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer`}>

          <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
            <p className={`${montserrat.className} font-medium text-[.8vw]`}>{selectedCategory1_Id_2_text}</p>
            {/* <img src="/sidebar-cross.png" className='w-[3%]' onClick={() => { setSelectedCategory1_Id(null) }} /> */}
          </div>
        </div>}
        {
          selectedCategory3?.map((item, index) => {
            return (
              <div className={`h-[7%] w-full  border-b-[1px] flex justify-center items-center cursor-pointer ${selectedCategory1_Id && selectedCategory1_Id === item?.id ? 'border-[#00CB56] bg-[#E6FFED]' : 'border-[#C4C4C4] bg-[#ffffff]'}`} key={index} onClick={() => { }}>

                <div className='cursor-pointer flex items-center justify-between w-full px-[4%]' >
                  <p className={`${montserrat.className} font-medium text-[.8vw]`}>{item.text}</p>
                  {selectedCategory1_Id == item.id ?
                    <img src="/right-arrow-green.png" className='w-[1.5%]' />
                    :
                    <img src="/right-arrow.png" className='w-[1.5%]' />
                  }
                </div>
              </div>
            )
          })


        }

      </div>}


      {selectedCategory1_Id && <div className='w-[25%] h-[100%]'>

      </div>}
    </>
  )
}

export default Sidebar