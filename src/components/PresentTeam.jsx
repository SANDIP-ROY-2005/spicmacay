import React from 'react'
import TeamImg from './TeamImg';

const PresentTeam = () => {
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Meet</span>
          </span>{" "}
          our final years - The Heads
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <TeamImg src="saikat" name="Saikat Sarkar" post="President" />
        <TeamImg src="hridikalpa" name="Hridikalpa Das" post="Vice President and Music Wing Head" />
        <TeamImg src="ankon" name="Ankon Ghosh" post="General Secretary" />
        <TeamImg src="abhinandan" name="Abhinandan Mandal" post="Assistant General Secretary" />
        <TeamImg src="biswanath" name="Biswanath Chakraborty" post="Treasurer" />
        <TeamImg src="pritasmi" name="Pritasmi Bhattacharya" post="Treasurer" />
        <TeamImg src="drishita" name="Drishita Nag" post="Sponsorship Head" />
        <TeamImg src="dipranjan" name="Dipranjan Dey" post="Sponsorship Head" />
        <TeamImg src="debrup" name="Debrup Chakroborty" post="Publicity Head" />
        <TeamImg src="prativa" name="Prativa Sahu" post="Publicity Head" />
        <TeamImg src="joyraj" name="Joyraj Longjam" post="ATH Head" />
        <TeamImg src="harshitha" name="Harshita Yenna" post="ATH Head" />
        <TeamImg src="souvik" name="Souvik Pal" post="IT Wing Head" />
        <TeamImg src="debasmita" name="Debasmita Das" post="IT Wing Head" />
        <TeamImg src="harsh" name="Harsh Guha" post="Music Wing Head" />
        <TeamImg src="pratiti" name="Pratiti Pradhan" post="Dance Wing Head" />
        <TeamImg src="harika" name="Boddu Harika" post="Dance Wing Head" />
        <TeamImg src="adarsh" name="Adarsh Arya" post="Content Wing Head" />
        <TeamImg src="sharvani" name="Sharvani Reddy" post="Content Wing Head" />
        <TeamImg src="arpan" name="Arpan Sardar" post="Art Wing Head" />
        <TeamImg src="priyanshi" name="Priyanshi Singh" post="Art Wing Head" />
        
      </div>
    </div>
  );
};

export default PresentTeam
