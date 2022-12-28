import React, { useState } from "react";
import  { useNavigate }  from "react-router-dom";
import { Navbar } from "../components/NavBar";
import axios from "axios";
//import upForm from '../components/upForm';

export const UpPage = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`http://localhost:5000/api/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    const handleClickBasedUpdate = (item) => {
        
        axios 
            .put(`/blogs/pt/${item._id}`, item.blogContent)
            .then((res) => {
                if (res.data)
                {
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));   
    }

    const handleUpdate = (item) => {
        return(
            <>
                <div class="modal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Component</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className="form-control" value={item.blogContent} onChange={(e) => item.blogContent = e.target.value} placeholder="Enter Blog Content: " required={true}></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => handleClickBasedUpdate(item)}>Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
     
    }

    return(
        <>
            <Navbar/>
            <br/>
             <div>
                <ul className="list-group">
                    {data && data.length > 0 ? (
                        data.map((item) => {
                            return (
                                <li key={item._id} className="list-group-item" onClick={() => handleUpdate(item)}>
                                    <label>{item.blogDate}</label>
                                    <p>{item.blogContent}</p>
                                </li>
                            );
                        })
                    ) : (
                        <li>No Blog Posts left</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default UpPage;