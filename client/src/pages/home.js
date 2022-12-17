import React, { useState } from 'React';
import {NavBar} from '../components/NavBar';
import axios from 'axios';

export const Home = () => {
    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get('https://localhost:5000/api/blogs/gt')
                setData(response.data)
            }
            getData()
    }, [])

    //add Display component
    const actiData = data.map(entry => {
        console.log(entry);
        return <Display
            blogNumber = {entry.blogNumber}
            blogContent = {entry.blogContent}
            blogDate = {entry.blogDate}
            />
            
    })

    return(
        <>
            <NavBar/>
            <br/>

        </>
    )
}