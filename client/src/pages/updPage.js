import React, { useState } from "react";
//import  { useNavigate }  from "react-router-dom";
import { Navbar } from "../components/NavBar";
import axios from "axios";
import { UpForm } from '../components/upForm';

//make changes here to make page responsive
export const UpPage = () => {
    const [data, setData] = useState([])
    //const navigate = useNavigate();

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`/api/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    // const handleUpdate = (item) => {
    //     return(
    //             <UpForm obj={item}/>
    //     )
    // }

    return(
        <>
            <Navbar/>
            <br/>
             <div>
                <ul className="list-group">
                    {data && data.length > 0 ? (
                        data.map((item) => {
                            return (
                                <li key={item._id} className="list-group-item" onClick={() => {return(<UpForm obj={item}/>)}}>
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