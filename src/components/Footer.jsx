// import React from 'react'
import { FaGithubSquare,  } from 'react-icons/fa'
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineCodepenCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>M.Tayyab</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/devtayyab04"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/m-tayyab-960b4b257/"><AiOutlineLinkedin /></a>
                <a href="https://codepen.io/M-Tayyab-the-scripter"><AiOutlineCodepenCircle /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2025 Dev | Tayyab</p>
        
    </div>
  )
}

export default Footer;