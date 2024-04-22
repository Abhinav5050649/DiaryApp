import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [blogNumber, setBlogNumber] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
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

    return (
        <div className="container">
            <form onSubmit={handleSubmit} method="post" className="text-center">
                <div className="form-group">
                    <label>Enter Blog Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={blogNumber}
                        onChange={(e) => setBlogNumber(e.target.value)}
                        placeholder="Enter Number:"
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label>Enter Blog content:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                        placeholder="Enter Content:"
                        required={true}
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default Form;