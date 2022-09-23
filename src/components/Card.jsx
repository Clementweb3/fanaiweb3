// import React from 'react'
// import { useRef,useEffect,useState } from 'react'
// import { motion } from 'framer-motion'
// import Nezuko from "../assets/nezuko.png"
// import Drawings from "../assets/drawings.jpg"
// import BG from "../assets/bg.jpg"
// import Computer from "../assets/computer.jpg"

// const images = [
//   {
   
//     image:Nezuko
//   },
//   {
    
//     image:Drawings
//   },
//   {
    
//     image:BG
//   },
//   {
   
//     image:Computer
//   }
// ]

// const Card = () => {
//   console.log(images)
//   return (
//     <div className=' text-white w-full lg:h-screen mt-[100px] md:mt-2 lg:mt-2  '>
//       <div className='max-w-screen-lg mx-auto flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
//         <motion.div className='carousel bg-white'>
//           <motion.div className='inner-carousel'>
//             {
//               images.map((image) => {
//                 return(
//                     <motion.div className='item'>
//                        <img src={image} alt="" />
                       
//                     </motion.div>
                      
//                 )
//               })
//             }
//           </motion.div>
//         </motion.div>
        
//       </div>
//     </div>
//   )
// }

// export default Card