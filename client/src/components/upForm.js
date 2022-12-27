import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const upForm = ({blogNumber, blogContent, blogDate, id}) => {

    const navigate = useNavigate();
    const handleSubmit = async(id) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/blogs/pt/${id}`, {
            blogNumber: this.blogNumber,
            blogContent: this.blogContent,
            blogDate: this.blogDate
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        navigate("/");
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit} method="put"> 
                    <div className="form-group">
                        <label>Enter new blog content: </label>
                        <input type="text" className="form-control" value={blogContent} onChange={(e) => setName(e.target.value)} id="textFormControlInput1" placeholder="Enter New Blog Content: " required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default upForm;