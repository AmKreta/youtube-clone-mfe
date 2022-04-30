import React,{useLayoutEffect,useRef} from 'react';
import {mount} from 'player/playerIndex';

const Player=function(){

    const playerRef=useRef(null);

    useLayoutEffect(function(){
        mount && mount(playerRef.current);
    },[])

    return (
        <div ref={playerRef}/>
    );
}

export default Player;