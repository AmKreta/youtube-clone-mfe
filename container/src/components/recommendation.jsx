import React,{useRef,useLayoutEffect} from 'react';
import {mount} from 'recommendation/recommendationIndex';

const Recommendation=function(){

    const recommendationRef=useRef(null);

    useLayoutEffect(function(){
        mount && mount(recommendationRef.current);
    },[]);

    return(
        <div ref={recommendationRef} />
    );
}

export default Recommendation;