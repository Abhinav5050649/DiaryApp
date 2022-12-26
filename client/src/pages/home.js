import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';
//import Display from '../components/Display';

export const Home = () => {
    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    //handle update part the same way handle as in delpage
    // const actiData = data.map(entry => {
    //     console.log(entry);
    //     return <Display
    //         blogNumber = {entry.blogNumber}
    //         blogContent = {entry.blogContent}
    //         blogDate = {entry.blogDate}
    //         id = {entry._id}
    //         />
            
    // })
    
    //handle update part
    return(
        <>
            <Navbar/>
            <br/>
            <div>
                <ul className="list-group">
                    {data && data.length > 0 ? (
                        data.map((item) => {
                            return (
                                <li key={item._id} className="list-group-item">
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

export default Home;