import React, { useState, useRef, useEffect } from 'react';
import "./reproductor.css";


// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";



const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 1 es el volumen máximo
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    // Actualiza la duración una vez que el audio se ha cargado
    setDuration(audioRef.current.duration);
  }, [src]);



  const inputVol = useRef(null);
  const inputTime = useRef(null)
  // funcion para controlar los rangos
  const expandir=(variable,accion)=>{
    if (accion == "expandir") {
      variable.style.width = "35px";
      variable.style.visibility = "visible";
    } else {
      variable.style.width = "0";
      variable.style.visibility = "hidden";
    }
    
  }




  return (
    <div onMouseLeave={()=>expandir(inputVol.current,"ocultar")} className="custom-audio-player">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      ></audio>

      <input
        ref={inputTime}
        className="custom-audio-playerTime"
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />

      <div className='custom-audio-playerContentBottons'>
        <button onClick={togglePlayPause}>
          {isPlaying ? 
            <FontAwesomeIcon icon={faPause} />:
            <FontAwesomeIcon icon={faPlay} />
          }
        </button>




        <div className='custom-audio-player-contentInput'>
        <button
          onMouseOver={()=>expandir(inputVol.current,"expandir")}
        ><FontAwesomeIcon icon={faVolumeUp} /></button>
          <input
            ref={inputVol}
            className='custom-audio-playerVol'
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>

      



    </div>
  );
};

export default CustomAudioPlayer;
