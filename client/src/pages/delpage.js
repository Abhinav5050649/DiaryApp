//Draft this page after a while
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Navbar from '../components/NavBar';

//make changes here to make page responsive
export const Delpage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`/api/blogs/gt`)
            setData(response.data)
        }
        getData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`/api/blogs/del/${id}`)
            .then((res) => {
                if (res.data) {
                    console.log(res);
                }
            })
            .catch((err) => console.log(err));

        navigate("/");
    }

    return (
        <>
            <Navbar />
            <br/>
            <div className="container mx-auto max-w-screen-md">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">
                        <ul className="list-group">
                            {data && data.length > 0 ? (
                                data.map((item) => {
                                    return (
                                        <li key={item._id} onClick={() => handleDelete(item._id)} className="list-group-item">
                                            <p>{item.blogContent}</p>
                                        </li>
                                    );
                                })
                            ) : (
                                <div className="text-center">
                                    <p>No logs left</p>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delpage;