import React, { useState } from "react";
import  { useNavigate }  from "react-router-dom";
import { Navbar } from "../components/NavBar";
import axios from "axios";
import { UpForm } from '../components/upForm';

//make changes here to make page responsive
export const UpPage = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`/api/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    // const handleClickBasedUpdate = (item) => {
        
    //     axios 
    //         .put(`/api/blogs/pt/${item._id}`, item.blogContent)
    //         .then((res) => {
    //             if (res.data)
    //             {
    //                 navigate("/");
    //             }
    //         })
    //         .catch((err) => console.log(err));   
    // }

    const handleUpdate = (item) => {
        // return(
        //     <>
        //         <div class="modal" tabindex="-1">
        //             <div class="modal-dialog">
        //                 <div class="modal-content">
        //                 <div class="modal-header">
        //                     <h5 class="modal-title">Update Component</h5>
        //                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                     </button>
        //                 </div>
        //                 <div class="modal-body">
        //                     <input type="text" className="form-control" value={item.blogContent} onChange={(e) => item.blogContent = e.target.value} placeholder="Enter Blog Content: " required={true}></input>
        //                 </div>
        //                 <div class="modal-footer">
        //                     <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => handleClickBasedUpdate(item)}>Close</button>
        //                     <button type="button" class="btn btn-primary">Save changes</button>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </>
        // )
        console.log("Working?")
        
        navigate(`/updpage/upform/:${item._id}`);
        
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