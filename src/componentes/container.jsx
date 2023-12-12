import React from 'react';
import Audio from './audio';

const Container = ({ onClick, play, song, ChangeSong }) => {
  const titles = ["Lost in the City Lights", "Forest Lullaby"];
  const artist = ["Cosmo Sheldrake", "Lesfm"];

  // Declare bg variable outside the if statements
  let bg = '';

  if (song === 0) {
    bg = "../assets/cover1.png";
  } else if (song === 1) {
    bg = "../assets/cover2.png";
  }
  
  return (
    <div className='bg-background w-[330px] h-[500px] rounded-[24px] flex flex-col items-center p-[20px]' >
      <div className={` bg-cover bg-no-repeat w-full h-[55%] rounded-[16px]`} style={{backgroundImage:`url(${bg})`}}></div>
      <div className='p-4 flex flex-col justify-center items-center'>
        <div className='text-important_txt font-semibold text-2xs'>{titles[song]}</div>
        <div className='text-secondary text-xs'>{artist[song]}</div>
      </div>
      <Audio onClick={onClick} play={play} song={song} ChangeSong={ChangeSong}/>
    </div>
  );
};

export default Container;
