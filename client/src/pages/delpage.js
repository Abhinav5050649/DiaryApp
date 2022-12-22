//Draft this page after a while
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const delpage = (id) => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get('https://localhost:5000/api/blogs/gt')
                setData(response.data)
            }
            getData()
    }, [])

    const handleDelete = (id) => {
        axios 
            .delete(`/api/todos/${id}`)
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
                                {item.blogDate}
                                <br/>
                                {item.blogContent}
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

export default delpage;