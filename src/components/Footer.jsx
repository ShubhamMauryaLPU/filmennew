import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    let navData = [
        { id: 1, name: "Home", link: "/home", icon: "fa-house" },
        { id: 2, name: "Movies", link: "/movies", icon: "fa-film" },
        { id: 3, name: "Tv Shows", link: "/shows", icon: "fa-tv" },
      ];
  return (
    <div className='min-h-[40vh] bg-black grid grid-cols-1 lg:grid-cols-2 text-white'>
        <div className='flex flex-col w-[60%] py-5 min-h-[40vh]'>
            <h1 className=' text-2xl font-bold px-5 text-red-700'>About</h1>
            <p className='text-xl text-center pl-2'>It is a good movie website. You can download and watch Online.</p>
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