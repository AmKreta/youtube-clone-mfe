import React,{useRef,useLayoutEffect} from 'react';
import {mount} from 'authentication/AuthIndex';

const Auth=function(){

    const authContainerRef=useRef(null);

    useLayoutEffect(function(){
        mount(authContainerRef.current);
    },[]);

    return (
        <div ref={authContainerRef}>

        </div>
    );
}

export default Auth;