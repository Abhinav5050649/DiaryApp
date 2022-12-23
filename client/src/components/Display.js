import React from 'react';
import { updPage } from '../pages/updPage';

export const Display = ({blogNumber, blogContent, blogDate, id}) => {
    
    //handle update
    const handleClick = () => {
        <updPage 
            blogNumber= {this.blogNumber}
            blogContent = {this.blogContent}
            blogDate = {this.blogDate}
            id={this.id}
        />
    }
    
    return(
        <>
            <li class="list-group-item"><p>{blogNumber}</p></li> 
            <li class="list-group-item list-group-item-warning"><p>{blogDate}</p></li> 
            <li class="list-group-item"><p>{blogContent}</p></li> 
            <button type="button" class="btn btn-primary" onClick={handleClick}>Update</button>
        </>
    )
}

export default Display;