import React from 'react'
import { FaTwitterSquare,FaDiscord,FaTelegram,FaWhatsappSquare } from 'react-icons/fa'

const Contact = () => {

  const contact = [
    {
      id:1,
      invite:"Follow me on Twitter",
      logo:<FaTwitterSquare size={40}/>,
      link:"https://twitter.com/5p1l0u8t0u8s"
    },
    {
      id:2,
      invite:"Contact me on Telegram",
      logo:<FaTelegram size={40}/>,
      link:"https://t.me/Cryptofanai"
    },
    {
      id:3,
      invite:"Contact me on Discord",
      logo:<FaDiscord size={40}/>,
      link:"discordapp.com/users/990646240507228170"
    },
    {
      id:4,
      invite:"Contact me on Whatsapp",
      logo:<FaWhatsappSquare size={40}/>,
      link:" https://wa.me/918119969105"
    },
  ]

  return (
    <div id='contact' className='text-white h-screen sm:h-full sm:mb-[200px] w-full  mt-[100px]'>
      <div className="max-w-screen-lg flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 mx-auto w-full ">
     
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  mb-9 border-b-4 py-2 border-gray-500 leading-9 w-full ">Contact</h1> 
          <p className="md:text-[20px] text-gray-300 text-[18px] leading-[30.8px]  font-normal md:max-w-[80%] ">Contact me on my <span className='text-gradient'>social accounts</span> .Let's get to know each other</p>
              <div className="md:flex-row flex mt-7 flex-col w-full ">
                {
                  contact.map(({id,invite,logo,link}) => {
                  return (
                    <div key={id} className={`bg-black-gradient hover:bg-none transition-[400ms] md:border-r md:border-b-0 md:h-[300px] h-[150px] border-b w-full rounded-md justify-center items-center flex shadow-lg flex-col  py-3`}>
                      <div  className="p-3">
                        <h2 className={`lg:text-2xl sm:text-xl text-[16px] font-bold text-center ${id === 2 ? "text-gradient" : "text-white"} ${id === 4 ? "text-gradient" : "text-white"}`}>{invite}</h2>
                        
                      </div>
                      <a target="_blank" className="bg-blue-gradient text-black rounded-lg p-3 cursor-pointer" href={link}>{logo}</a>
                    </div>

                  )
                  })
                }
              </div>
            </div>
        
      </div>

  )
}

export default Contact