//Draft this page after a while
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar from '../components/NavBar';

//make changes here to make page responsive
export const Delpage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`http://localhost:5000/api/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    const handleDelete = (item) => {
        axios 
            .delete(`http://localhost:5000/api/blogs/del/${item._id}`)
            .then((res) => {
                if (res.data)
                {
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));        
    }

    return(
        <>
            <Navbar/>
            <ul>
                {data && data.length > 0 ? (
                    data.map((item) => {
                        return (
                            <li key={item._id} onClick = {() => handleDelete(item)}>
                                <p>{item.blogDate}</p>
                                <p>{item.blogContent}</p>
                            </li>
                        );
                    })
                ) : (
                    <li>No Blog Posts left</li>
                )}
            </ul>
        </>
    )
}

export default Delpage;