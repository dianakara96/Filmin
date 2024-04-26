

import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2024 FILMiN. All rights reserved.</p>
        <div className="mt-2">
          <p>Designed  by [Diana Kara]</p>
          <p>Data sourced from <a href="https://www.themoviedb.org/" className="text-gray-400 hover:text-gray-300 underline">The Movie Database</a></p>
          <p>Contact us: dianakara@gmail.com</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Explore More</p>
          <ul className="flex justify-center mt-2 space-x-4">
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Now Playing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Popular</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Top Rated</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Upcoming</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Sign in</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300 underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;