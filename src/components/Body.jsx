import React from "react";
import { FaPlay } from "react-icons/fa";
import Movie from './Movie';


const Body = () => {
    return (
        <div className="w-screen ">
            <iframe
            className="w-screen h-screen"
             width="560" height="315" src="https://www.youtube.com/embed/dXpa5PrtuP0?si=d1DIqsA8cJDLvPNWautoplay=1&mute=1" title="YouTube video player" frameborder="0"   allowfullscreen></iframe>
             <div className="absolute text-white  top-1/2 left-0 transform -translate-y-1/2 p-8 ">
             <h1 className="text-3xl font-bold">HeartBreak High</h1>
             <p>This is a 2022 Australian TV show that follows Amerie Wadia and her chaotic high school experience at Hartley High</p>
                <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
                    <FaPlay/>
                   <span>Play</span>
                </button>

             </div>
             <div>
                <h1 className="text-3xl text-white"></h1>
             </div>
             <div className="flex items center">
                <Movie/>
             </div>
             
             
            
        </div>
        
        
    
    )
}

export default Body;


