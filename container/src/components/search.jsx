import React,{useLayoutEffect,useRef} from 'react';
import {mount} from 'search/searchIndex';

const Search=function(){

    const searchRef=useRef(null);

    useLayoutEffect(function(){
        mount && mount(searchRef.current);
    },[]);

    return (
        <div ref={searchRef}/>
    );
}

export default Search;