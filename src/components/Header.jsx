import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <div className="absolute flex w-[100%] items-center justify-between bg-gradient-to-b from-black  ">
            <img src="" alt="" />
            <div className="flex items-center">
            <h1 className="text-lg font-medium text-white ">My List</h1>
            <IoIosArrowDropdown size='24px' color='white'/>
            <div className="ml-4">         
            <button className="bg-red-800 text-white px-4 py-2 ml-2">Logout</button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movies</button>

            </div>
            </div>
             
            
            
            
       
            
            
        
        
            
        
        </div>

        
        
    )
}

export default Header;