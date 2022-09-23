import React from 'react'
import { useState } from 'react'
import {FaHome,FaHandshake} from "react-icons/fa"
import {HiIdentification} from "react-icons/hi"
import {AiFillFolderOpen} from "react-icons/ai"
import {IoMdContacts} from "react-icons/io"
import {Link} from "react-scroll"

const Navbar = () => {

  const links = [
    {
      id:1,
      link:<FaHome size={30}/>,
      attr:"#"
    },
    {
      id:2,
      link:<HiIdentification size={30}/>,
      attr:"#about"
    },
    {
      id:3,
      link:<AiFillFolderOpen size={30}/>,
      attr:"#projects"
    },
    {
      id:4,
      link:<IoMdContacts size={30}/>,
      attr:"#contact"
    },

  ]

  const [activeNav,setActiveNav] = useState("#")


  return (


    <nav className='text-white w-max transform translate-x-[-50%] left-[50%] items-center bg-black-gradient border  z-[2] fixed  bottom-[32px]  gap-2 rounded-[38px] backdrop-blur-lg flex'>

        
      <ul className='list-none flex justify-end items-center p-1  md:px-7 md:py-2'>
        {
          links.map(({id,link,attr}) => {
            return(
              <li  key={id} className={`font-normal cursor-pointer text-xl text-gray-200  mx-1  ${link.length === id - 1 ? "mr-0" : "mr-8"} hover:bg-black-gradient  p-[13px] rounded-[50%]`}>
                <a href={attr} onClick={() => setActiveNav(attr)} className ={` ${activeNav == {attr} ? "active"  : ""}`}>{link}</a>
              </li>
            )
          })
        }
      </ul>
     

    </nav>
  )
}

export default Navbar