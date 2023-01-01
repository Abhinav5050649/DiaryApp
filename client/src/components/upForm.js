import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UpForm = (obj) => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // e.preventDefault();
        axios.put(`/api/blogs/pt/${obj._id}`, obj)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

        navigate("/");
    }

    return(
            <div>
                <form onSubmit={handleSubmit} method="put"> 
                    <div className="form-group">
                        <label>Enter new blog content: </label>
                        <input type="text" className="form-control" onChange={(e) => {obj.blogContent = (e.target.value)}} id="textFormControlInput1" placeholder={obj.blogContent} required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
    );
}

export default UpForm;