import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './foot.css'
function Footer() {
    return (
        <div>
            <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font center ml-auto mr-auto font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <span class="ml-auto mr-auto text-xl">Gowellness Spa</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">The Biggest Spa in Bangalore, Karnataka, India.</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Salon and Spa</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Reviva</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Esplendor</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Ora</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">De Stress</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">R&K</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Locations on Map</h2>
        <nav class="list-none mb-10">
          <li>
            <a href='https://g.page/Reviva-salon-and-spa?share' class="text-gray-600 hover:text-gray-800">28/2 Harlur Road, Bengaluru</a>
          </li>
          <li>
            <a href='https://g.page/esplendor-spa?share' class="text-gray-600 hover:text-gray-800">Sector 6, Bengaluru</a>
          </li>
          <li>
            <a href='https://goo.gl/maps/MpZSYFENqc74uZAo9' class="text-gray-600 hover:text-gray-800">Raj Arcade, No.387,Bengaluru</a>
          </li>
          <li>
            <a href='https://g.page/de-stress-luxury-spa-salon?share' class="text-gray-600 hover:text-gray-800">Sector 2, Bengaluru</a>
          </li>
          <li>
            <a href='https://goo.gl/maps/ovJRiEUssTM1NWKA8' class="text-gray-600 hover:text-gray-800">5th Block ,Koramangala, Bengaluru</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Navigation</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to='/'><a class="text-gray-600 hover:text-gray-800">Home</a>
        </Link>
          </li>
          <li>
            <Link to='/safety'><a class="text-gray-600 hover:text-gray-800">Safety Check</a>
</Link>
          </li>
          <li>
            <Link to='/about'><a class="text-gray-600 hover:text-gray-800">About Us</a>
    </Link>
          </li>
          <li>
            <Link to='/contact'><a class="text-gray-600 hover:text-gray-800">Contact Us</a>
  </Link>
          </li>
          <li>
            <Link to='/services'><a  class="text-gray-600 hover:text-gray-800">Services</a>
    </Link>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
  <div class="" style={{backgroundColor:'#5a665d'}}>
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-left">© 2021 Salon 
     
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
            
        </div>
    )
}

export default Footer
