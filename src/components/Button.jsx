import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 rounded-full flex justify-between items-center'>
    <span className='text-sm font-medium text-black'>Get Started</span>
    <IoIosReturnRight className='text-black'/>
    </div>
  )
}

export default Button