import React from 'react';
import { updPage } from '../pages/updPage';

export const Display = ({blogNumber, blogContent, blogDate, id}) => {
    
    //handle update
    const handleClick = () => {
        <updPage 
            blogNumber= {blogNumber}
            blogContent = {blogContent}
            blogDate = {blogDate}
            id={id}
        />
    }
    
    return(
        <>
            <li key={id} className="list-group-item">
                <p>{blogNumber}</p><br/>
                <p>{blogDate}</p><br/>
                <p>{blogContent}</p>    
            </li> 
            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
        </>
    )
}

export default Display;