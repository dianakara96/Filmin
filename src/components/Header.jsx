import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className='absolute flex w-[100%] items-center justify-between bg-gradient-to-b from-black  '> { /*  */}
            <div className='container mx-auto flex justify-between items-center mt-1 mb-1'>
            <Link to="/" className='text-white italic  font-bold text-2xl'>FILMiN</Link>
            <ul className="flex justify-center space-x-6">
            {/* <li>
                 <Link to="/popular" className='text-lg font-medium text-white '>Popular </Link>
             </li>
             <li>
                 <Link to="/top" className='text-lg font-medium text-white '>Top Related </Link>
             </li>
             <li>
                 <Link to="/upcoming" className='text-lg font-medium text-white '>Upcoming</Link>
             </li> */}
            <li>
                 <Link to="/login" className='bg-red-800 text-white px-4 py-1 ml-1  '>Signup</Link>
             </li>
             <li>
                 <Link to="/search" className='bg-red-800 text-white px-4 py-1 ml-1'>SearchMovies</Link>
             </li>
             
             
             </ul>
            </div>
        </nav>
        </>
    )
}

export default Header;