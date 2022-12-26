//Draft this page after a while
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export const Delpage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    const handleDelete = (id) => {
        axios 
            .delete(`/blogs/del/${id}`)
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
            <ul>
                {data && data.length > 0 ? (
                    data.map((item) => {
                        return (
                            <li key={item._id} onClick = {() => handleDelete(item._id)}>
                                <label>{item.blogDate}</label>
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