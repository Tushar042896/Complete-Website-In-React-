import React, { useRef, useState } from 'react';
import './Videoplayer.css'
import video1 from '../../Assets/Video.mp4'



const VideoPlayer = ({playState, setPlayState }) => {


    const player = useRef(null)

    const closePlayer = (e)=>{
        if(e.target==player.current){
            setPlayState(false) 
        }
    }

    return (
        <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video1} autoPlay muted controls></video>

        </div>
    );
}

export default VideoPlayer;
