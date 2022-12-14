import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [blogNumber, setBlogNumber] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        axios.post(`/api/blogs/pst`, {
                blogNumber: blogNumber,
                blogContent: blogContent,
            })
            .then((response) => {
                console.log(response);
                setBlogNumber('');
                setBlogContent('');
            }, (error) => {
                console.log(error);
            });
            
            navigate("/");
    }

    return(
            <div>
                <form onSubmit={handleSubmit} method="post"> 
                    <div className="form-group">
                        <label>Enter Log Number: </label>
                        <input type="text" className="form-control" value={blogNumber} onChange={(e) => setBlogNumber(e.target.value)} id="textFormControlInput1" placeholder="Enter Number: " required={true}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Log content: </label>
                        <input type="text" className="form-control" value={blogContent} onChange={(e) => setBlogContent(e.target.value)} id="textFormControlInput1" placeholder="Enter Content: " required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
    );
}

export default Form;