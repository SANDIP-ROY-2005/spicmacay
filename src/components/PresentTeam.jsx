import React, { useState } from 'react'
import FinalYear from './FinalYear';
import PreFinal from './PreFinal';
import Second from './Second'

const PresentTeam = () => {
  const [year, setYear] = useState({final:1,prefinal:0,second:0})
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Meet</span>
          </span>{" "}
          our Team - Without whom, there is no Spicmacay
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="text-sm my-4 font-medium text-center text-gray-500 dark:text-gray-400 ">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <p onClick={()=>{setYear({final:1,prefinal:0,second:0})}} aria-current="page" href="#" className={`inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg ${!year.final && "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} ${year.final && "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"}`}>Final Years</p>
          </li>
          <li className="mr-2">
            <p onClick={()=>{setYear({final:0,prefinal:1,second:0})}} aria-current="page" href="#" className={`inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg ${!year.prefinal && "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} ${year.prefinal && "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"}`}>Pre-Final Years</p>
          </li>
          <li className="mr-2">
            <p onClick={()=>{setYear({final:0,prefinal:0,second:1})}} className={`inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg ${!year.second && "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} ${year.second && "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"} `}>Second Years</p>
          </li>
        </ul>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {year.final ?<FinalYear/>:null}
        {year.prefinal ?<PreFinal/>:null}
        {year.second ? <Second/>:null}
      </div>
    </div>
  );
};

export default PresentTeam
