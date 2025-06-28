import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='text-3xl flex justify-between text-red-500 font-bold p-3 border-b-2 '>
     <span> Filmy<span className='text-slate-300'>Hub</span></span>
  <Link to="/add">  <h1 className='text-xl flex items-center text-slate-300 cursor-pointer'> <Button className='flex items-center'><AddIcon className='mr-1'/><span className='text-white'>ADD NEW</span></Button></h1></Link>


      
    </div>
  )
}

export default Header
