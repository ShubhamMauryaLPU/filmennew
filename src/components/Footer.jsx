import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    let navData = [
        { id: 1, name: "Home", link: "/home", icon: "fa-house" },
        { id: 2, name: "Food", link: "/food", icon: "fa-utensils" },
        { id: 3, name: "Drink", link: "/drink", icon: "fa-wine-glass-empty" },
      ];
  return (
    <div className=' min-h-[40vh] bg-black grid grid-cols-1 lg:grid-cols-2 text-white'>
        <div className='flex flex-col w-[60%] py-5 min-h-[40vh]'>
            <h1 className=' text-2xl font-bold px-5 text-red-700'>About</h1>
            <p className='text-xl text-center pl-2'>We are delivering the best food with great user experience.</p>
        </div>
        <div className='min-h-[40vh]'>
            <h1 className='text-2xl px-10 py-5 font-bold text-red-700 '>Quick Links</h1>
            <ul>
                {
                    navData.map((item)=>(
                       <Link to={item.link} key={item.id}>
                        <li className='text-lg px-10 font-serif py-2 text-orange-200 hover:text-red-700'>{item.name}</li>
                       </Link>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Footer