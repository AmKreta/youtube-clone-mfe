import React, { useLayoutEffect, useRef } from 'react';
import { mount } from 'comments/commentsIndex';

const Comments = function () {

    const commentsContainerRef = useRef(null);

    useLayoutEffect(function () {
        mount && mount(commentsContainerRef.current);
    }, []);

    return (
        <div ref={commentsContainerRef}>

        </div>
    );
}

export default Comments;