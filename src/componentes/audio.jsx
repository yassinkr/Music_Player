import React from "react";
import { useState,useRef ,useEffect} from "react";
const AudioPlayer = ({ onClick, play ,ChangeSong,song}) => {
  const songRef = useRef(null);
  const progress = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const songs = [
    "./src/assets/lost-in-city-lights-145038.mp3",
    "./src/assets/forest-lullaby-110624.mp3"
  ];

  useEffect(() => {

    const handleTimeUpdate = () => {
      setCurrentTime(songRef.current.currentTime);
      progress.value = songRef.current.currentTime;
    };

    if (songRef.current) {
      songRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (songRef.current) {
        songRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    setCurrentTime(progress.value);
  }, [progress]);

  const handleInputChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    songRef.current.currentTime = newTime;
  };

  useEffect(() => {
    if (play) {
      songRef.current.play();
    } else {
      songRef.current.pause();
    }
  }, [play,song]);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="flex justify-between w-full text-secondary text-xxs">
       <div> {formatTime(currentTime ? currentTime : 0)}</div>
        <div> {formatTime(songRef.current ? songRef.current.duration : 0)}</div>
      </div>
      <div className="hidden">
        <audio  controls ref={songRef} source src={songs[song]}  type="audio/mp3">
      
        Your browser does not support the audio element.
      </audio></div>
      <input
        type='range'
        value={currentTime}
        min="0"
        max={songRef.current ? songRef.current.duration : 100}
        ref={progress}
        className='w-full h-[6px] cursor-pointer appearance-none mt-[10px] color-primary rounded-full overflow-hidden'
        onChange={handleInputChange}
        
      />
      
      <div className='w-[100%] h-16  flex gap-2 m-2 justify-center items-center mt-[30px]'>
    <button className=' bg-object-fit bg-no-repeat w-12 flex justify-center items-center' onClick={ChangeSong}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8136 14.2517L23.6953 10.9841C25.0284 10.2435 26.6666 11.2074 26.6666 12.7324V19.2676C26.6666 20.7926 25.0284 21.7566 23.6953 21.016L17.8136 17.7483C16.442 16.9863 16.442 15.0137 17.8136 14.2517Z" fill="#4D5562"/>
<path d="M10.6666 22.6667L10.6666 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
<path d="M5.33325 22.6667L5.33325 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
</svg>
</button>
    <button className='shadow-custom bg-primary bg-object-fit bg-no-repeat w-12 aspect-square rounded-full flex justify-center items-center' onClick={onClick}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.941 14.244L14.119 10.236C12.686 9.50176 11 10.5696 11 12.2115V19.7885C11 21.4304 12.686 22.4982 14.119 21.764L21.941 17.756C23.353 17.0325 23.353 14.9675 21.941 14.244Z" fill="#E5E7EB"/>
</svg>
</button>
    <button className=' bg-object-fit bg-no-repeat w-12 flex justify-center items-center' onClick={ChangeSong}><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.1864 14.2517L8.30466 10.9841C6.9716 10.2435 5.33337 11.2074 5.33337 12.7324V19.2676C5.33337 20.7926 6.9716 21.7566 8.30466 21.016L14.1864 17.7483C15.558 16.9863 15.558 15.0137 14.1864 14.2517Z" fill="#4D5562"/>
  <path d="M21.3334 22.6667L21.3334 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
  <path d="M26.6667 22.6667L26.6667 9.33335" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
</svg></button>
 </div>
      </div>
  );
};

export default AudioPlayer;
