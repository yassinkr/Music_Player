import React from 'react'
import { useState } from 'react';
import Container from './componentes/container.jsx'
const App = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [play, setPlay] = useState(false);
  const playNextSong = () => {
    setCurrentSong((prevSong) => (prevSong + 1) % 2);
    
  };

  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className=' flex justify-center align-middle items-center w-[100%] h-[100vh]' id='backgr'>
      <Container onClick={handlePlay} play={play} ChangeSong={playNextSong} song={currentSong}/>
    </div>
  )
}

export default App