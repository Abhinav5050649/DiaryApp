import React from 'react';

export const Display = ({blogNumber, blogContent, blogDate}) => {
    return(
        <>
            <li class="list-group-item"><p>{blogNumber}</p></li> 
            <li class="list-group-item list-group-item-warning"><p>{blogDate}</p></li> 
            <li class="list-group-item"><p>{blogContent}</p></li> 
        </>
    )
}

export default Display;