import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import dark_logo from './Logos/logo_dark.png'
import light_logo from './Logos/logo_light.png'

const Header = ({dark}) => {
  const location = useLocation()
  return (
    <header className="text-gray-600 dark:bg-slate-800 dark:text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={dark?dark_logo:light_logo} alt="Spicmacay" width={150} height={200} />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className={`mr-5 ${location.pathname==='/'?"border-b-2":""} dark:hover:text-blue-500 hover:text-gray-900`}>Home</Link>
          <Link to={'/gallery'} className={`mr-5 ${location.pathname==='/gallery'?"border-b-2":""} dark:hover:text-blue-500 hover:text-gray-900`}>Gallery</Link>
          <Link to={'/team'} className={`mr-5 ${location.pathname==='/team'?"border-b-2":""} dark:hover:text-blue-500 hover:text-gray-900`}>Team</Link>
          <Link to={'/events'} className={`mr-5 ${location.pathname==='/events'?"border-b-2":""} dark:hover:text-blue-500 hover:text-gray-900`}>Events</Link>
          <a href={'https://virasat-eta.vercel.app/'} className={`mr-5 dark:hover:text-blue-500 hover:text-gray-900`}>Virasat</a>
          <Link to={'/contact'} className={`mr-5 ${location.pathname==='/contact'?"border-b-2":""} dark:hover:text-blue-500 hover:text-gray-900`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header
