import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';

export const UpForm = () => {
    //  const { search } = useLocation();
    //  const searchParams = new URLSearchParams(search)
    //  console.log(searchParams)
    const location = useLocation();
    const itemId = location.pathname.split("http://localhost:3000/updpage/upform/:");
    const [val, setVal] = useState([])

    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            "blogContent": val,
        }
        console.log(data)

        axios
            .put(`/api/blogs/pt/:${itemId}`, data)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

        navigate("/");
    }

    return(
        <>
            <Navbar/>
            <br/>
            <div>
                <form onSubmit={handleSubmit} method="put"> 
                    <div className="form-group">
                        <label>Enter new blog content: </label>
                        <input type="text" className="form-control" onChange={(e) => setVal(e.target.value)} id="textFormControlInput1" placeholder="Enter content" required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );

}

export default UpForm;